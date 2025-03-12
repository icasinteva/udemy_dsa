class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;

      this.length++;
    }

    return this;
  }
}
