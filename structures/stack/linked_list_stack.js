class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const popped = this.top;
    this.top = this.top.next;
    this.length--;
    return popped.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }

  size() {
    return this.length;
  }

  print() {
    let curr = this.top;
    let result = "";
    while (curr) {
      result += curr.value + " ";
      curr = curr.next;
    }
    console.log('[' + result.trim() + ']');
  }
}

module.exports = LinkedListStack;
