// This class needs to have a reference to the Array of Numbers that I want to sort
export class NumbersCollection {
  //data: number[]; // type of Array of Number

  //// when the 'Numbers Collection' is created I want to sort it straigt away

  // 1ST WAY
  /*   constructor(data: number[]) {
    // taking that Argument '(data: number[])' and assigning it to the 'data' Property
    this.data = data;
  } */

  // 2ND WAY (also I removed the initialization on Line 3)
  constructor(public data: number[]) {}

  // number of elements inside of the 'data' Array, to tell the 'for loops' how many steps of the iteration there are in the 'collection' In 'Sorter.ts'
  // get, so I can write 'collection.length' instead of 'collection.length()' after I will create a 'new Instance of the 'collection' '
  get length(): number {
    return this.data.length;
  }

  // returns a 'boolean' to indicate whether or not this pair of elements needs to be swapped
  compare(leftIndex: number, rightIndex: number): boolean {
    //and if Element on the Left hand side of the pair is greater than the Element on the Right hand side then SWAP
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Swapping logic for Array of Numbers
    const leftHand = this.data[leftIndex]; // get's the reference to the Element on the LEFT hand side
    this.data[leftIndex] = this.data[rightIndex]; // takes the RIGHT hand side and throws it over to the LEFT index
    this.data[rightIndex] = leftHand; // takes the reference of 'leftHand' and throw it over to the RIGHT
  }
}
