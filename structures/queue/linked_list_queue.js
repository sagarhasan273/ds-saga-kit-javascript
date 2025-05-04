// LinkedListQueue.js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.front) return null;
    const removed = this.front;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    this.length--;
    return removed.value;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.front;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log('[' + result.join(" <- ") + ']');
  }
}

module.exports = LinkedListQueue;
