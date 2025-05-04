const SinglyLinkedList = require("./singly_linked_list");
const DoublyLinkedList = require("./doubly_linked_list");

/**
 * Creates a linked list instance based on type.
 * @param {'singly' | 'doubly'} type
 * @returns {SinglyLinkedList | DoublyLinkedList}
 */
function LinkedListFactory(type = "singly") {
  const typeLower = type.toLowerCase();

  if (typeLower === "singly") return new SinglyLinkedList();
  if (typeLower === "doubly") return new DoublyLinkedList();

  throw new Error(`Unsupported linked list type: ${type}`);
}

module.exports = {
  LinkedListFactory,
  SinglyLinkedList,
  DoublyLinkedList,
};
