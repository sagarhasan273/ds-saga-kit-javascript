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
    console.log("[" + result.join(" <- ") + "]");
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value); // Add to end
  }

  dequeue() {
    return this.queue.shift(); // Remove from front
  }

  peek() {
    return this.queue.length ? this.queue[0] : null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log("[" + this.queue.join(" <- ") + "]");
  }
}

module.exports = { Queue, LinkedListQueue };
