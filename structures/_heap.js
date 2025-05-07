class _CreateMnH {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert([key, value]) {
    this.heap.push([key, value]);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index][0] < this.heap[this.getParentIndex(index)][0]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][0] < this.heap[smallerChildIndex][0]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index][0] <= this.heap[smallerChildIndex][0]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  print() {
    console.log(this.heap);
  }
}

class _CreateMxH {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert([key, value]) {
    this.heap.push([key, value]);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index][0] > this.heap[this.getParentIndex(index)][0]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][0] > this.heap[largerChildIndex][0]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index][0] >= this.heap[largerChildIndex][0]) break;

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  print() {
    console.log(this.heap);
  }
}

module.exports = { _CreateMnH, _CreateMxH };
