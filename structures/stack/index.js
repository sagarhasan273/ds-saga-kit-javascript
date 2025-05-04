const Stack = require("./stack");
const LinkedListStack = require("./linked_list_stack");

/**
 * Creates a stack instance based on type.
 * @param {'array' | 'linkedlist'} type
 * @returns {Stack | LinkedListStack}
 */
function StackFactory(type = "array") {
  if (type === "linkedlist") {
    return new LinkedListStack();
  }
  return new Stack();
}

module.exports = {
  StackFactory,
  Stack,
  LinkedListStack,
};
