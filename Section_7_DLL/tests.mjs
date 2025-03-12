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
