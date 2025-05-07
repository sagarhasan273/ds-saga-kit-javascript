/**
 * Regular Array implementation
 */

class _CreateAL {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Get element at index
  get(index) {
    return this.data[index];
  }

  // Add element to the end
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Remove last element
  pop() {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // Delete element at index
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    const deletedItem = this.data[index];
    this._shiftItems(index);
    return deletedItem;
  }

  // Insert element at index
  insert(index, item) {
    if (index < 0 || index > this.length) return false;
    this._shiftItems(index, true);
    this.data[index] = item;
    return true;
  }

  // Shift items left or right for insert/delete
  _shiftItems(index, isInsert = false) {
    if (isInsert) {
      // Shift items to the right
      for (let i = this.length; i > index; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.length++;
    } else {
      // Shift items to the left
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }

  // Find first index of item
  indexOf(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) return i;
    }
    return -1;
  }

  // Check if array includes item
  includes(item) {
    return this.indexOf(item) !== -1;
  }

  // Convert to string
  toString() {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += this.data[i];
      if (i < this.length - 1) result += ",";
    }
    return result;
  }

  // Join elements with separator
  join(separator = ",") {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += this.data[i];
      if (i < this.length - 1) result += separator;
    }
    return result;
  }

  // Slice array
  slice(start = 0, end = this.length) {
    const newArray = new _CreateAL();
    for (let i = start; i < end; i++) {
      newArray.push(this.data[i]);
    }
    return newArray;
  }

  // Reverse array
  reverse() {
    const newArray = new _CreateAL();
    for (let i = this.length - 1; i >= 0; i--) {
      newArray.push(this.data[i]);
    }
    return newArray;
  }

  // Map function
  map(callback) {
    const newArray = new _CreateAL();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this.data[i], i, this));
    }
    return newArray;
  }

  // Filter function
  filter(callback) {
    const newArray = new _CreateAL();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this)) {
        newArray.push(this.data[i]);
      }
    }
    return newArray;
  }

  // Reduce function
  reduce(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this.data[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this.data[i], i, this);
    }

    return accumulator;
  }

  /**
   * Sort the array elements
   * @param {Function} [compareFunction] - Optional compare function
   * @returns {MyArray} The sorted array (for chaining)
   */
  sort(compareFunction = (a, b) => (a > b ? 1 : -1)) {
    if (this.length <= 1) return this;

    const middle = Math.floor(this.length / 2);
    const left = new MyArray();
    const right = new MyArray();

    for (let i = 0; i < middle; i++) {
      left.push(this.data[i]);
    }
    for (let i = middle; i < this.length; i++) {
      right.push(this.data[i]);
    }

    return this._merge(
      left.sort(compareFunction),
      right.sort(compareFunction),
      compareFunction
    );
  }

  _merge(left, right, compareFunction) {
    const result = new MyArray();
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (compareFunction(left.get(leftIndex), right.get(rightIndex)) <= 0) {
        result.push(left.get(leftIndex));
        leftIndex++;
      } else {
        result.push(right.get(rightIndex));
        rightIndex++;
      }
    }

    // Add remaining elements
    while (leftIndex < left.length) {
      result.push(left.get(leftIndex));
      leftIndex++;
    }
    while (rightIndex < right.length) {
      result.push(right.get(rightIndex));
      rightIndex++;
    }

    // Copy back to current array
    this.length = result.length;
    for (let i = 0; i < result.length; i++) {
      this.data[i] = result.get(i);
    }

    return this;
  }

  /**
   * Print the array elements
   * @param {string} [separator=', '] - Separator between elements
   * @param {string} [prefix='['] - Prefix before elements
   * @param {string} [suffix=']'] - Suffix after elements
   */
  print(separator = ", ", prefix = "[", suffix = "]") {
    let output = prefix;
    for (let i = 0; i < this.length; i++) {
      output += this.data[i];
      if (i < this.length - 1) {
        output += separator;
      }
    }
    output += suffix;
    console.log(output);
    return this; // for method chaining
  }
}

module.exports = { _CreateAL };
