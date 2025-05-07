class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class _CreateS {
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
    console.log("[" + result.trim() + "]");
  }
}

class _CreateAS {
  constructor(list = []) {
    if (!Array.isArray(list)) {
      throw new Error("Stack constructor only accepts an array.");
    }
    this.stack = list;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log("[" + this.stack.join(" ") + "]");
  }
}

module.exports = { _CreateAS, _CreateS };
