const { ...linkedList } = require("./linked-list");
const { ...stack } = require("./stack");
// const { ...queue } = require("./queue");
// const { ...deque } = require("./deque");
// const { ...hashTable } = require("./hash-table");
// const { ...binarySearch } = require("./binary-search");
// const { ...heap } = require("./heap");
// const { ...graph } = require("./graph");

module.exports = {
  ...stack,
  ...linkedList,
//   ...queue,
//   ...deque,
//   ...hashTable,
//   ...binarySearch,
//   ...heap,
//   ...graph,
};
