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

  pop() {
    if (!this.length) return undefined;

    let tmp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tmp.prev;
      this.tail.next = null;
    }

    tmp.prev = null;
    this.length--;

    return tmp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    if (!this.length) return undefined;

    const tmp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    tmp.next = null;

    this.length--;

    return tmp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const middle = Math.floor(this.length / 2);

    let current = this.head;

    if (index < middle) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);

      return true;
    }
    if (index === this.length) {
      this.push(value);

      return true;
    }

    const newNode = new Node(value);
    const after = this.get(index);
    const before = after.prev;

    newNode.prev = before;
    newNode.next = after;
    before.next = newNode;
    after.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const node = this.get(index);

    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.prev = null;
    node.next = null;

    this.length--;

    return node;
  }
}
