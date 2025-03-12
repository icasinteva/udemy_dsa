import { DoublyLinkedList } from './EXERCISE-DLL.mjs';

function test() {
  let myDLL = new DoublyLinkedList(7);

  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  console.log('\nDoubly Linked List:');
  myDLL.printList();
}

//test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 7
    Tail: 7
    Length: 1

    Doubly Linked List:
    7

*/

function testPush() {
  let myDLL = new DoublyLinkedList(1);
  myDLL.push(2);

  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  console.log('\nDoubly Linked List:');
  myDLL.printList();

  /*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Doubly Linked List:
    1
    2

*/
}

//testPush();

function testPop() {
  let myDLL = new DoublyLinkedList(1);
  myDLL.push(2);

  // (2) Items in LL - Returns 2 Node
  if (myDLL.length !== 0) {
    console.log(myDLL.pop().value);
  } else {
    console.log('null');
  }

  // (1) Item in LL - Returns 1 Node
  if (myDLL.length !== 0) {
    console.log(myDLL.pop().value);
  } else {
    console.log('null');
  }

  // (0) Items in LL - Returns null
  if (myDLL.length !== 0) {
    console.log(myDLL.pop().value);
  } else {
    console.log('null');
  }

  /*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
}

// testPop();

function testUnshift() {
  let myDLL = new DoublyLinkedList(2);
  myDLL.push(3);

  console.log('Before unshift():');
  console.log('-----------------');
  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  console.log('\nDoubly Linked List:');
  myDLL.printList();

  myDLL.unshift(1);

  console.log('\n\nAfter unshift():');
  console.log('----------------');
  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  console.log('\nDoubly Linked List:');
  myDLL.printList();

  /*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Doubly Linked List:
    2
    3


    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Doubly Linked List:
    1
    2
    3

*/
}

// testUnshift();

function testShift() {
  let myDLL = new DoublyLinkedList(2);
  myDLL.push(1);

  // (2) Items in LL - Returns 2 Node
  if (myDLL.length !== 0) {
    console.log(myDLL.shift().value);
  } else {
    console.log('null');
  }

  // (1) Item in LL - Returns 1 Node
  if (myDLL.length !== 0) {
    console.log(myDLL.shift().value);
  } else {
    console.log('null');
  }

  // (0) Items in LL - Returns null
  if (myDLL.length !== 0) {
    console.log(myDLL.shift().value);
  } else {
    console.log('null');
  }

  /*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
}

testShift();

function testGet() {
  let myDLL = new DoublyLinkedList(0);
  myDLL.push(1);
  myDLL.push(2);
  myDLL.push(3);

  console.log(myDLL.get(3).value);

  /*
    EXPECTED OUTPUT:
    ----------------
    3

*/
}

testGet();

function testSet() {
  let myDLL = new DoublyLinkedList(0);
  myDLL.push(1);
  myDLL.push(2);
  myDLL.push(3);

  console.log('DLL before set():');
  myDLL.printList();

  myDLL.set(2, 99);

  console.log('\nDLL after set():');
  myDLL.printList();

  /*
    EXPECTED OUTPUT:
    ----------------
    DLL before set():
    0
    1
    2
    3

    DLL after set():
    0
    1
    99
    3

*/
}

testSet();

function testInsert() {
  let myDLL = new DoublyLinkedList(1);
  myDLL.push(3);

  console.log('DLL before insert():');
  myDLL.printList();

  myDLL.insert(1, 2);

  console.log('\nDLL after insert(2) in middle:');
  myDLL.printList();

  myDLL.insert(0, 0);

  console.log('\nDLL after insert(0) at beginning:');
  myDLL.printList();

  myDLL.insert(4, 4);

  console.log('\nDLL after insert(4) at end:');
  myDLL.printList();

  /*
    EXPECTED OUTPUT:
    ----------------
    DLL before insert():
    1
    3

    DLL after insert(2) in middle:
    1
    2
    3

    DLL after insert(0) at beginning:
    0
    1
    2
    3

    DLL after insert(4) at end:
    0
    1
    2
    3
    4

*/
}

testInsert();
