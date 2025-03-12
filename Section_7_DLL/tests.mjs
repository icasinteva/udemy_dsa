import { DoublyLinkedList } from './EXERCISE-DLL.mjs';

function test() {
  let myDLL = new DoublyLinkedList(7);

  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  console.log('\nDoubly Linked List:');
  myDLL.printList();
}

test();

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

testPush();
