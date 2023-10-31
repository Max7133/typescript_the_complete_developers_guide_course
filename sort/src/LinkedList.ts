// 2 values, Value - number, next - reference to the next 'node' in the chain, or it might be 'null', if it's null - means end of the chain
// not defining the 'next' node in the chain when I create a Node, that's why I will create a 'node' first and then associate it witho some other node in the chain
class Node {
  next: Node | null = null; // by default created Node will be null (it's not going to be attached or referenced by any other Node)

  constructor(public data: number) {}
}

// will have reference to 'head' Node
// 'head' is going to be either a reference to a 'node' or it might be 'null' when the LinkedList is first created
export class LinkedList {
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
}
