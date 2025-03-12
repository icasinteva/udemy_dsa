import assert from 'node:assert';
import test from 'node:test';

import { DoublyLinkedList } from './EXERCISE-DLL.mjs';

function testDll(originalDll, dll) {
  test('The list should have correct length and order of the nodes', () => {
    let i = 0;
    let temp = originalDll.head;

    assert.strictEqual(
      originalDll.length,
      dll.length,
      'The length does not match'
    );

    while (temp) {
      assert.strictEqual(temp.value, dll[i], 'The order is wrong');
      temp = temp.next;
      i++;
    }
  });
}

test.describe('DLL', () => {
  test('Should create DLL', () => {
    let myDLL = new DoublyLinkedList(7);

    assert.strictEqual(myDLL.head, myDLL.tail);
    assert.strictEqual(myDLL.head.value, 7);
    assert.strictEqual(myDLL.length, 1);
  });

  test.skip('Method Push', () => {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);

    assert.strictEqual(myDLL.length, 2);

    testDll(myDLL, [1, 2]);
  });

  test.describe('Method Pop', () => {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);

    test('Should return last node when list has more than one node in it', () => {
      assert.strictEqual(myDLL.pop().value, 2);
      assert.strictEqual(myDLL.length, 1);
      testDll(myDLL, [1]);
    });

    test('Should empty the list that has one item', () => {
      assert.strictEqual(myDLL.pop().value, 1);
      assert.strictEqual(myDLL.length, 0);
      assert.strictEqual(myDLL.head, null);
      testDll(myDLL, []);
    });

    test('Should return null if the list is empty', () => {
      assert.strictEqual(myDLL.pop(), undefined);
    });
  });

  test.describe('Method Unshift', () => {
    let myDLL = new DoublyLinkedList(2);

    myDLL.push(3);
    myDLL.unshift(1);

    test('Should increase the length by 1', () => {
      assert.strictEqual(myDLL.length, 3);
    });

    test('Should add item at the beginning', () => {
      assert.strictEqual(myDLL.head.value, 1);
    });

    testDll(myDLL, [1, 2, 3]);
  });

  test.describe('Method Shift', () => {
    let myDLL = new DoublyLinkedList(1);

    myDLL.push(2);

    myDLL.shift();

    test('Should decrease the length by 1', () => {
      assert.strictEqual(myDLL.length, 1);
    });

    test('Should remove item at the beginning', () => {
      assert.strictEqual(myDLL.head.value, 2);
      testDll(myDLL, [2]);
    });

    test('Should empty the list that has one item', () => {
      assert.strictEqual(myDLL.shift().value, 2);
      assert.strictEqual(myDLL.length, 0);
      assert.strictEqual(myDLL.head, null);
      testDll(myDLL, []);
    });

    test('Should return null if the list is empty', () => {
      assert.strictEqual(myDLL.shift(), undefined);
    });
  });

  test.describe('Method Get', () => {
    let myDLL = new DoublyLinkedList(0);

    myDLL.push(1);
    myDLL.push(2);
    myDLL.push(3);

    test('Should return undefined if index is less than 0 or greater than list length', () => {
      assert.strictEqual(myDLL.get(-1), undefined);
      assert.strictEqual(myDLL.get(myDLL.length + 5), undefined);
    });

    test('Should return the value of the node by the given index', () => {
      assert.strictEqual(myDLL.get(2).value, 2);
    });
  });

  test.describe('Method Set', () => {
    let myDLL = new DoublyLinkedList(0);

    myDLL.push(1);
    myDLL.push(2);
    myDLL.push(3);

    test('Should return false if there is no node by the given index', () => {
      assert.strictEqual(myDLL.set(-1, 99), false);
    });

    test('Should update the value of the node by the given index and return true', () => {
      assert.ok(myDLL.set(2, 99));
      assert.equal(myDLL.get(2).value, 99);

      testDll(myDLL, [0, 1, 99, 3]);
    });
  });

  test.describe.only('Method Insert', () => {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(3);

    test('Should return false if the index is less than 0 or greater than the length of the list', () => {
      assert.strictEqual(
        myDLL.insert(-1, 99),
        false,
        'Should return false, as the index is less than 0'
      );
      assert.strictEqual(
        myDLL.insert(myDLL.length + 5, 99),
        false,
        'Should return false, as the index is greater than the length of the list'
      );
    });

    test('Should insert at the beginning if the index is 0 and return true', () => {
      assert.ok(myDLL.insert(0, 0));
      assert.strictEqual(myDLL.get(0).value, 0);
      testDll(myDLL, [0, 1, 3]);
    });

    test('Should insert at the end if the index is equal the list of the length and return true', () => {
      assert.ok(myDLL.insert(myDLL.length, 4));
      assert.strictEqual(myDLL.get(myDLL.length - 1).value, 4);
      testDll(myDLL, [0, 1, 3, 4]);
    });

    test('Should insert correctly somewhere at the middle and return true', () => {
      assert.ok(myDLL.insert(2, 2));
      assert.strictEqual(myDLL.get(2).value, 2);
      testDll(myDLL, [0, 1, 2, 3, 4]);
    });
  });

  test.describe('Method Remove', () => {
    let myDLL = new DoublyLinkedList(1);

    myDLL.push(2);
    myDLL.push(3);
    myDLL.push(4);
    myDLL.push(5);

    test('Should remove node in the middle and return it', () => {
      const removedNode = myDLL.remove(2).value;
      const dllAfterRemove = [1, 2, 4, 5];

      assert.strictEqual(removedNode, 3);

      testDll(myDLL, dllAfterRemove);
    });

    test('Should remove the first node and return it', () => {
      const removedNode = myDLL.remove(0).value;
      const dllAfterRemove = [2, 4, 5];

      assert.strictEqual(removedNode, 1);

      testDll(myDLL, dllAfterRemove);
    });

    test('Should remove the last node and return it', () => {
      const removedNode = myDLL.remove(2).value;
      const dllAfterRemove = [2, 4];

      assert.strictEqual(removedNode, 5);

      testDll(myDLL, dllAfterRemove);
    });
  });
});
