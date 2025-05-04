// StackFactory.js

class Stack {
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
    console.log('[' + this.stack.join(" ") + ']');
  }
}

module.exports = Stack;
