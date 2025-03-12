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

testPop();

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

testUnshift();
