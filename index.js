const { ...singlyLinkedList } = require("./structures/singly_linked_list");
const { ...doublyLinkedList } = require("./structures/doubly_linked_list");
const { ...stack } = require("./structures/stack");
const { ...queue } = require("./structures/queue");
const { ...deque } = require("./structures/deque");
const { ...hashTable } = require("./structures/hash_table");
const { ...binarySearchTree } = require("./structures/binary_search_tree");
const { ...heap } = require("./structures/heap");
// const { ...graph } = require("./structures/graph");

module.exports = {
  ...singlyLinkedList,
  ...doublyLinkedList,
  ...stack,
  ...queue,
  ...deque,
  ...hashTable,
  ...binarySearchTree,
  ...heap,
  //   ...graph,
};
