const singlyLinkedList = require("./structures/_singlyLinkedList");
const doublyLinkedList = require("./structures/_doublyLinkedList");
const array  = require("./structures/_array");
const sortedArray = require("./structures/_sortedArray");
const stack = require("./structures/_stack");
const queue = require("./structures/_queue");
const dequeue = require("./structures/_dequeue");
const hashMap = require("./structures/_hashMap");
const binarySearchTree = require("./structures/_binarySearchTree");
const heap = require("./structures/_heap");

module.exports = {
  SinglyLinkedList: singlyLinkedList._CreateSLL,
  DoublyLinkedList: doublyLinkedList._CreateDLL,
  Array: array._CreateAL,
  SortedArray: sortedArray._CreateSA,
  Stack: stack._CreateS,
  ArrayStack: stack._CreateAS,
  Queue: queue._CreateQ,
  ArrayQueue: queue._CreateAQ,
  Deque: dequeue._CreateDeQ,
  HashMap: hashMap._CreateHM,
  BinarySearchTree: binarySearchTree._CreateBST,
  MinHeap: heap._CreateMnH,
  MaxHeap: heap._CreateMxH,
};
