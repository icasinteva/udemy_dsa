class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
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
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;

      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      const node = this.tail;

      this.makeEmpty();

      return node;
    }

    let prev = null;
    let current = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return current;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const node = this.head;

    node.next = null;

    this.head = this.head.next;

    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return node;
  }
}
