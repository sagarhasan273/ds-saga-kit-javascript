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

module.exports = Queue;
