import { LinkedList } from "./EXERCISE-LL.mjs";

function testPush() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.makeEmpty();
    myLinkedList.push(1);
    myLinkedList.push(2);
  
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
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
        console.log("null");
    }

    // (1) Item in LL - Returns 1 Node
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
    }

    // (0) Items in LL - Returns null
    if (myLinkedList.length !== 0) {
        console.log(myLinkedList.pop().value);
    } else {
        console.log("null");
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