class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove from end
  pop() {
    if (!this.tail) return null;
    const removed = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }

    this.length--;
    return removed.value;
  }

  // Add to beginning
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove from beginning
  shift() {
    if (!this.head) return null;
    const removed = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }

    this.length--;
    return removed.value;
  }

  // Get value by index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) current = current.prev;
    }

    return current.value;
  }

  // Set value by index
  set(index, value) {
    if (index < 0 || index >= this.length) return false;

    let current = this.head;
    for (let i = 0; i < index; i++) current = current.next;

    current.value = value;
    return true;
  }

  // Print list
  printForward() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" <-> "));
  }

  printBackward() {
    let current = this.tail;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.prev;
    }
    console.log(values.join(" <-> "));
  }
}

module.exports = DoublyLinkedList;
