import { Sorter } from './Sorter';

// 2 values, Value - number, next - reference to the next 'node' in the chain, or it might be 'null', if it's null - means end of the chain
// not defining the 'next' node in the chain when I create a Node, that's why I will create a 'node' first and then associate it witho some other node in the chain
class Node {
  next: Node | null = null; // by default created Node will be null (it's not going to be attached or referenced by any other Node)

  constructor(public data: number) {}
}

// will have reference to 'head' Node
// 'head' is going to be either a reference to a 'node' or it might be 'null' when the LinkedList is first created
export class LinkedList extends Sorter {
  head: Node | null = null; // default value === null

  // takes in a 'number' and it's going to create a 'node' out of it, then it will add that 'node' to the very end of the chain
  add(data: number): void {
    // creating a New Node out of that 'number'
    const node = new Node(data);

    // there needs to be a 'head', if no 'head' and the LinkedList is empty, then I will take the new 'node' that was created and assign it to the 'head' Property
    if (!this.head) {
      this.head = node;
      // even though the type is 'void' I still can return, just without any 'value'
      return; // immediately so that no other code inside will run
    }

    // finds the last node in the Chain and add the newly created 'node' to that
    let tail = this.head; // reference to the first 'node' in the chain
    // 'head node' - first node with[value and next]
    // while the 'head node' has a defined 'next' Property, then advance that 'tail' Variable further in the chain
    // while 'tail' has a defined 'next' Property (actual Node)
    while (tail.next) {
      tail = tail.next; // then update the 'tail' reference so that 'tail' will now be referring to the next 'node'
    }

    // if tail.next doesn't refer to something, then it refers to 'null' - means the END of the Chain, and I exit the 'while loop'

    tail.next = node; // once it gets to the LAST 'node', take the 'node' that I just created and have the 'next' Property of that last one referred to the 'node' I just created
  }

  get length(): number {
    // if there is no 'head'
    if (!this.head) {
      return 0; // because the LinkedList is empty
    }

    // counting Variable
    let length = 1;
    // reference to the 1st 'node' in the Chain
    let node: Node | null = this.head;
    while (node.next) {
      length++; // increment length counter
      node = node.next; // update the 'node' reference here to point at the 'next node' in the chain
    }

    return length;
  }

  // receives an Index and returns the 'node' at that Index
  at(index: number): Node {
    if (!this.head) {
      // if it dosent have a 'head' Property (if the LinkedList is empty), and it tries to get an Element inside of it then throw an Error
      throw new Error('Index out of bounds');
    }

    let counter = 0; // because I want to start counting it at Index 0 for that 1st 'node'
    let node: Node | null = this.head;
    while (node) {
      // if it have counted all the way up to the appropriate index, that means it has found the 'node' that it looks for
      if (counter === index) {
        // that means return than 'node'
        return node;
      }

      // otherwise, continue iterating
      counter++; // to start to move on to the next 'node'
      node = node.next; // and it will update the 'node' reference to the 'next node' along the Chain
    }

    throw new Error('Index out of bounds'); // never found an 'index' that I was looking for
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    // 'node' at leftIndex
    // .data - I want to reference it's 'data' Property to find the Number inside that actual 'node' and then Compare It to see if it's greater then the 'node' Value at 'rightIndex'
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // will only swap Values of the 'node' not the complete node with the 'next' reference
    const leftNode = this.at(leftIndex); // reference to the 'node' on the LEFT
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    // taking the 'rightHand' side and throw it into the LEFT
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    // while it has a 'node'
    while (node) {
      console.log(node.data);
      // update the 'node' Variable to the 'next node' along the Chain
      node = node.next;
    }
  }
}
