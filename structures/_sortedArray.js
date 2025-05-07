"use strict";

/**
 * Optimized _CreateSA implementation with binary search operations
 */
class _CreateSA {
  /**
   * @param {Function|Array} [compareOrItems] - Compare function or initial items
   * @param {Array} [initialItems] - Initial items (if compare provided)
   */
  constructor(compareOrItems, initialItems) {
    // Optimized constructor with branch prediction hints
    let compare, items;

    if (typeof compareOrItems === "function") {
      compare = compareOrItems;
      items = initialItems ? initialItems.slice() : [];
    } else {
      compare = (a, b) => a - b;
      items = compareOrItems ? compareOrItems.slice() : [];
    }

    // Pre-allocate array size when known
    this._array = new Array(items.length);
    this._compare = compare;

    // Fast path for initial sorting
    if (items.length > 0) {
      items.sort(compare);
      for (let i = 0; i < items.length; i++) {
        this._array[i] = items[i];
      }
    }

    // Cache length to avoid property access
    this._length = items.length;
  }

  /**
   * Get array length (optimized property)
   */
  get length() {
    return this._length;
  }

  /**
   * Insert a value while maintaining sort order
   * @param {*} value
   * @returns {number} Insertion index
   */
  insert(value) {
    const index = this._findInsertIndex(value);
    this._insertAt(index, value);
    return index;
  }

  /**
   * Insert multiple values (optimized batch operation)
   * @param {Array} values
   * @returns {Array} Insertion indices
   */
  insertMany(values) {
    if (values.length === 0) return [];

    // Optimized path for bulk insertion
    if (values.length > 50) {
      return this._bulkInsert(values);
    }

    const indices = new Array(values.length);
    for (let i = 0; i < values.length; i++) {
      indices[i] = this.insert(values[i]);
    }
    return indices;
  }

  /**
   * Remove first occurrence of value
   * @param {*} value
   * @returns {boolean} True if removed
   */
  remove(value) {
    const index = this.indexOf(value);
    if (index >= 0) {
      this._removeAt(index);
      return true;
    }
    return false;
  }

  /**
   * Remove item at index
   * @param {number} index
   * @returns {*} Removed value
   */
  removeAt(index) {
    if (index < 0 || index >= this._length) {
      throw new RangeError("Index out of bounds");
    }
    return this._removeAt(index);
  }

  /**
   * Find index of value
   * @param {*} value
   * @returns {number} Index or -1 if not found
   */
  indexOf(value) {
    const { idx, found } = this._binarySearch(value);
    return found ? idx : -1;
  }

  /**
   * Check if value exists
   * @param {*} value
   * @returns {boolean}
   */
  has(value) {
    const { found } = this._binarySearch(value);
    return found;
  }

  /**
   * Get value at index
   * @param {number} index
   * @returns {*}
   */
  get(index) {
    if (index < 0 || index >= this._length) {
      throw new RangeError("Index out of bounds");
    }
    return this._array[index];
  }

  /**
   * Get first value
   * @returns {*}
   */
  first() {
    return this._length > 0 ? this._array[0] : undefined;
  }

  /**
   * Get last value
   * @returns {*}
   */
  last() {
    return this._length > 0 ? this._array[this._length - 1] : undefined;
  }

  /**
   * Remove and return first value
   * @returns {*}
   */
  shift() {
    return this._length > 0 ? this._removeAt(0) : undefined;
  }

  /**
   * Remove and return last value
   * @returns {*}
   */
  pop() {
    return this._length > 0 ? this._removeAt(this._length - 1) : undefined;
  }

  /**
   * Clear the array
   */
  clear() {
    this._array = [];
    this._length = 0;
  }

  /**
   * Get array copy
   * @returns {Array}
   */
  toArray() {
    return this._array.slice(0, this._length);
  }

  /**
   * Iterator implementation
   */
  *[Symbol.iterator]() {
    for (let i = 0; i < this._length; i++) {
      yield this._array[i];
    }
  }

  /**
   * Binary search for value
   * @param {*} value
   * @returns {{idx: number, found: boolean}}
   */
  _binarySearch(value) {
    const arr = this._array;
    const compare = this._compare;
    let low = 0;
    let high = this._length - 1;

    while (low <= high) {
      const mid = (low + high) >>> 1;
      const cmp = compare(value, arr[mid]);

      if (cmp > 0) {
        low = mid + 1;
      } else if (cmp < 0) {
        high = mid - 1;
      } else {
        // Find first occurrence for stability
        let first = mid;
        while (first > 0 && compare(value, arr[first - 1]) === 0) {
          first--;
        }
        return { idx: first, found: true };
      }
    }

    return { idx: low, found: false };
  }

  /**
   * Find insertion index for value
   * @param {*} value
   * @returns {number}
   */
  _findInsertIndex(value) {
    const arr = this._array;
    const compare = this._compare;
    let low = 0;
    let high = this._length;

    while (low < high) {
      const mid = (low + high) >>> 1;
      if (compare(arr[mid], value) < 0) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  /**
   * Insert value at index
   * @param {number} index
   * @param {*} value
   */
  _insertAt(index, value) {
    // Check if we need to grow array
    if (this._length === this._array.length) {
      const newCapacity = Math.max(4, this._length * 2);
      const newArray = new Array(newCapacity);

      // Copy elements before index
      for (let i = 0; i < index; i++) {
        newArray[i] = this._array[i];
      }

      // Insert new element
      newArray[index] = value;

      // Copy elements after index
      for (let i = index; i < this._length; i++) {
        newArray[i + 1] = this._array[i];
      }

      this._array = newArray;
    } else {
      // Shift elements to make space
      for (let i = this._length; i > index; i--) {
        this._array[i] = this._array[i - 1];
      }
      this._array[index] = value;
    }

    this._length++;
  }

  /**
   * Remove value at index
   * @param {number} index
   * @returns {*} Removed value
   */
  _removeAt(index) {
    const value = this._array[index];

    // Shift elements down
    for (let i = index; i < this._length - 1; i++) {
      this._array[i] = this._array[i + 1];
    }

    this._length--;
    this._array[this._length] = undefined; // Avoid memory leak

    // Shrink array if too sparse
    if (
      this._length > 0 &&
      this._array.length > 100 &&
      this._length < this._array.length / 4
    ) {
      const newCapacity = Math.max(4, this._length * 2);
      const newArray = new Array(newCapacity);
      for (let i = 0; i < this._length; i++) {
        newArray[i] = this._array[i];
      }
      this._array = newArray;
    }

    return value;
  }

  /**
   * Optimized bulk insertion
   * @param {Array} values
   * @returns {Array} Insertion indices
   */
  _bulkInsert(values) {
    // Merge with existing array (like merge sort)
    const newArray = new Array(this._length + values.length);
    const tempValues = values.slice().sort(this._compare);

    let i = 0,
      j = 0,
      k = 0;
    const indices = new Array(values.length);
    const valuePositions = new Map();

    // Pre-process positions for tracking indices
    for (let idx = 0; idx < tempValues.length; idx++) {
      const val = tempValues[idx];
      if (!valuePositions.has(val)) {
        valuePositions.set(val, []);
      }
      valuePositions.get(val).push(idx);
    }

    while (i < this._length && j < tempValues.length) {
      const cmp = this._compare(this._array[i], tempValues[j]);
      if (cmp <= 0) {
        newArray[k++] = this._array[i++];
      } else {
        newArray[k++] = tempValues[j++];
      }
    }

    // Add remaining elements
    while (i < this._length) newArray[k++] = this._array[i++];
    while (j < tempValues.length) newArray[k++] = tempValues[j++];

    // Update internal state
    this._array = newArray;
    this._length = newArray.length;

    // Calculate original insertion indices
    const resultIndices = new Array(values.length);
    const valueCounts = new Map();

    for (let idx = 0; idx < this._length; idx++) {
      const val = this._array[idx];
      if (valuePositions.has(val)) {
        const positions = valuePositions.get(val);
        const count = (valueCounts.get(val) || 0) + 1;
        valueCounts.set(val, count);

        if (count <= positions.length) {
          resultIndices[positions[count - 1]] = idx;
        }
      }
    }

    return resultIndices;
  }

  /**
   * Get range between min and max (inclusive)
   * @param {*} min
   * @param {*} max
   * @returns {Array}
   */
  getRange(min, max) {
    const start = this._findInsertIndex(min);
    const end = this._findInsertIndex(max);

    // Adjust end to be inclusive
    let inclusiveEnd = end;
    if (
      inclusiveEnd < this._length &&
      this._compare(this._array[inclusiveEnd], max) <= 0
    ) {
      inclusiveEnd++;
    }

    return this._array.slice(start, inclusiveEnd);
  }

  /**
   * Find first index matching predicate
   * @param {Function} predicate
   * @returns {number}
   */
  findIndex(predicate) {
    for (let i = 0; i < this._length; i++) {
      if (predicate(this._array[i], i, this)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Find first value matching predicate
   * @param {Function} predicate
   * @returns {*}
   */
  find(predicate) {
    const index = this.findIndex(predicate);
    return index >= 0 ? this._array[index] : undefined;
  }

  /**
   * Filter elements
   * @param {Function} predicate
   * @returns {_CreateSA}
   */
  filter(predicate) {
    const result = [];
    for (let i = 0; i < this._length; i++) {
      if (predicate(this._array[i], i, this)) {
        result.push(this._array[i]);
      }
    }
    return new _CreateSA(this._compare, result);
  }

  /**
   * Finds the first element that is not less than (i.e. >=) the given value
   * @param {*} value - The value to search for
   * @returns {number} The index of the first element >= value, or array length if not found
   */
  lowerBound(value) {
    let low = 0;
    let high = this._length;

    while (low < high) {
      const mid = (low + high) >>> 1;
      if (this._compare(this._array[mid], value) < 0) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  /**
   * Finds the first element that is greater than (i.e. >) the given value
   * @param {*} value - The value to search for
   * @returns {number} The index of the first element > value, or array length if not found
   */
  upperBound(value) {
    let low = 0;
    let high = this._length;

    while (low < high) {
      const mid = (low + high) >>> 1;
      if (this._compare(this._array[mid], value) <= 0) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  /**
   * Finds the range of elements equal to the given value
   * @param {*} value - The value to search for
   * @returns {[number, number]} The [first, last] indices of matching elements
   */
  equalRange(value) {
    return [this.lowerBound(value), this.upperBound(value)];
  }
}

module.exports = { _CreateSA };
