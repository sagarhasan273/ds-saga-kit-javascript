/**
 * Performs linear search on an array.
 * @param {any[]} arr - The array to search
 * @param {any} target - The value to find
 * @returns {number} Index of target, or -1 if not found
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

module.exports = linearSearch;
