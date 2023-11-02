import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  // number - number of characters inside of String
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    // separating the String into an Array of Characters
    const characters = this.data.split(''); // each of these 1 separate Character for

    const leftHand = characters[leftIndex]; // leftHand - is the left hand Character in each pair that I want to swap
    characters[leftIndex] = characters[rightIndex]; // Characters at leftIndex, I will throw the right hand side over to the left
    characters[rightIndex] = leftHand; // then restore the 'leftHand' side onto the right hand

    // updating the 'data' with the new 'string'
    this.data = characters.join('');
  }
}
