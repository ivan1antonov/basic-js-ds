const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const letter = new ListNode(value);
    if (this.tail) {
      this.tail.next = letter;
      this.tail = letter;
    } else this.head = this.tail = letter;

    return ++this.size;
  }

  dequeue() {
    if (!this.head) return null;
    const letter = this.head;
    const next = this.head?.next;
    if (next) {
      this.head = next;
    } else this.tail = this.head = null;

    --this.size;
    return letter.value;
  }
}

module.exports = {
  Queue,
};
