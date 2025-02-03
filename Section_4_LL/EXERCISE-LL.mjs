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

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let node = this.head;

    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.legth) return false;

    if (!index) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const before = this.get(index - 1);

    newNode.next = before.next;
    before.next = newNode;

    this.length++;

    return true;
  }

  remove(index, value) {
    if (index < 0 || index >= this.length) return null;

    if (!index) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;

    this.length--;

    return temp;
  }
}

const myList = new LinkedList(3);
myList.push(11);
myList.push(4);
myList.getTail();

myList.set(myList.length - 1, 5);

myList.getTail();
