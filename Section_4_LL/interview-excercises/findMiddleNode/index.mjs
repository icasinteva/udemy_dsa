import { LinkedList as MyLinkedList } from '../../interview-exercises-base.mjs';

MyLinkedList.prototype.findMiddleNode = function findMiddleNode() {
  if (!this.head) return null;

  let slowPointer = this.head;
  let fastPointer = this.head;
  //3-11-4-7-5-2-8
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next; // 11 4 7
    fastPointer = fastPointer.next.next; // 4 5 8
  }

  return slowPointer;
};

let myLinkedList = new MyLinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new MyLinkedList(1);

myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log('\nOriginal list 2:');
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  Middle node value: 3
  Original list 2:
  1
  2
  3
  4
  5
  6
  Middle node value of list 2: 4
*/
