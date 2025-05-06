class HashTable {
  constructor(size = 53) {
    this.buckets = new Array(size);
    this.size = size;
  }

  // Basic hash function for strings
  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.size;
    }
    return total;
  }

  // Set key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value; // Update existing key
        return;
      }
    }

    this.buckets[index].push([key, value]);
  }

  // Get value by key
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let pair of bucket) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  // Check if key exists
  has(key) {
    return this.get(key) !== undefined;
  }

  // Delete key
  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const i = bucket.findIndex((pair) => pair[0] === key);
      if (i !== -1) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  // Get all keys
  keys() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [key] of bucket) {
          result.push(key);
        }
      }
    }
    return result;
  }

  // Get all values
  values() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [, value] of bucket) {
          result.push(value);
        }
      }
    }
    return result;
  }
}

module.exports = HashTable;
