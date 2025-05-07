class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class _CreateSLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add to end
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove from end
  pop() {
    if (!this.head) return null;

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
      // Only one node
      this.head = this.tail = null;
    }

    this.length--;
    return current.value;
  }

  // Add to beginning
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove from beginning
  shift() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return removed.value;
  }

  // Get value by index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  // Set value by index
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
    return true;
  }

  // Print list
  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

module.exports = { _CreateSLL };
