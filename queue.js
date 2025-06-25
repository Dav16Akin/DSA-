class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return undefined;

    let temp = this.first;

    if(this.length === 1) {
      this.first = null
      this.last = null
    }

    this.first = this.first.next
    temp.next = null
    this.length--
  }

}

let newQueue = new Queue(1);

newQueue.enqueue(2);
newQueue.enqueue(3);
// newQueue.dequeue();

console.log(newQueue);
