const Queue = require("./queue");
const LinkedListQueue = require("./linked_list_queue");

/**
 * Creates a Queue instance based on type.
 * @param {'queue' | 'linkedlist'} type
 * @returns {Queue | LinkedListQueue}
 */
function QueueFactory(type = "queue") {
  if (type === "linkedlist") {
    return new LinkedListQueue();
  }
  return new Queue();
}

module.exports = {
  QueueFactory,
  Queue,
  LinkedListQueue,
};
