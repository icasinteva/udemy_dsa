import { LinkedList as MyLinkedList } from '../interview-exercises-base.mjs';

MyLinkedList.prototype.hasLoop = function () {
  let slowPointer = this.head;
  let fastPointer = this.head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

let myLinkedList = new MyLinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();

const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Has loop? false
    Has loop after creating a loop? true
*/
