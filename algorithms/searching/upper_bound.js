/**
 * Finds the index of the first element greater than target (upper bound).
 * @param {number[]} arr - Sorted array
 * @param {number} target
 * @returns {number} Index of first element > target, or arr.length if none found
 */
function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;
  
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
  
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  module.exports = upperBound;
  