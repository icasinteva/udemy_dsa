import { LinkedList } from './EXERCISE-LL.mjs';

function testPush() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.makeEmpty();
  myLinkedList.push(1);
  myLinkedList.push(2);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log('\nLinked List:');
  myLinkedList.printList();
}

testPush();

/*
      EXPECTED OUTPUT:
      ----------------
      Head: 1
      Tail: 2
      Length: 2
  
      Linked List:
      1
      2
  
  */

function testPop() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);

  // (2) Items in LL - Returns 2 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log('null');
  }

  // (1) Item in LL - Returns 1 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log('null');
  }

  // (0) Items in LL - Returns null
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log('null');
  }
}

testPop();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/

function testShift() {
  let myLinkedList = new LinkedList(2);
  myLinkedList.push(1);

  // (2) Items in LL - Returns 2 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.shift().value);
  } else {
    console.log('null');
  }

  // (1) Item in LL - Returns 1 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.shift().value);
  } else {
    console.log('null');
  }

  // (0) Items in LL - Returns null
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.shift().value);
  } else {
    console.log('null');
  }
}

testShift();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/

function testGet() {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(3);

  console.log(myLinkedList.get(3).value);
}

testGet();

/*
      EXPECTED OUTPUT:
      ----------------
      3
  
  */

function testSet() {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(3);

  console.log('Linked List before set():');
  myLinkedList.printList();

  myLinkedList.set(2, 99);

  console.log('\nLinked List after set():');
  myLinkedList.printList();
}

testSet();

/*
    EXPECTED OUTPUT:
    ----------------
    Linked List before set():
    0
    1
    2
    3
    
    Linked List after set():
    0
    1
    99
    3

*/

function testInsert() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(3);

  console.log('LL before insert():');
  myLinkedList.printList();

  myLinkedList.insert(1, 2);

  console.log('\nLL after insert(2) in middle:');
  myLinkedList.printList();

  myLinkedList.insert(0, 0);

  console.log('\nLL after insert(0) at beginning:');
  myLinkedList.printList();

  myLinkedList.insert(4, 4);

  console.log('\nLL after insert(4) at end:');
  myLinkedList.printList();

  /*
    EXPECTED OUTPUT:
    ----------------
    LL before insert():
    1
    3

    LL after insert(2) in middle:
    1
    2
    3

    LL after insert(0) at beginning:
    0
    1
    2
    3

    LL after insert(4) at end:
    0
    1
    2
    3
    4

*/
}

testInsert();
