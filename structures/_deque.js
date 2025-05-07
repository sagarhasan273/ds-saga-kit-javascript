class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class _CreateD {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add to front
  addFront(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.length++;
  }

  // Add to rear
  addRear(value) {
    const newNode = new Node(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  // Remove from front
  removeFront() {
    if (!this.front) return null;
    const removed = this.front;
    if (this.front === this.rear) {
      this.front = this.rear = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed.value;
  }

  // Remove from rear
  removeRear() {
    if (!this.rear) return null;
    const removed = this.rear;
    if (this.front === this.rear) {
      this.front = this.rear = null;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed.value;
  }

  peekFront() {
    return this.front ? this.front.value : null;
  }

  peekRear() {
    return this.rear ? this.rear.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    const result = [];
    let current = this.front;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log("[" + result.join(" <-> ") + "]");
  }
}

module.exports = { _CreateD };
