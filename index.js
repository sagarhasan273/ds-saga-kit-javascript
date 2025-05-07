const singlyLinkedList = require("./structures/_singlyLinkedList");
const doublyLinkedList = require("./structures/_doublyLinkedList");
const stack = require("./structures/_stack");
const queue = require("./structures/_queue");
const deque = require("./structures/_deque");
const hashMap = require("./structures/_hashMap");
const binarySearchTree = require("./structures/_binarySearchTree");
const heap = require("./structures/_heap");

module.exports = {
  SinglyLinkedList: singlyLinkedList._CreateSLL,
  DoublyLinkedList: doublyLinkedList._CreateDLL,
  Stack: stack._CreateS,
  ArrayStack: stack._CreateAS,
  Queue: queue._CreateQ,
  ArrayQueue: queue._CreateAQ,
  Deque: deque._CreateD,
  HashMap: hashMap._CreateHM,
  BinarySearchTree: binarySearchTree._CreateBST,
  MinHeap: heap._CreateMnH,
  MaxHeap: heap._CreateMxH,
};
