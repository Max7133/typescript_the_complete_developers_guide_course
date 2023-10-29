interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean; // boolean is going to tell whether or not those 2 El. need to be swapped
  swap(leftIndex: number, rightIndex: number): void;
}

// takes the collection of data and
export class Sorter {
  // Array of Numbers
  //collection: number[];

  // added 'public' so then I won't need to specify the Field definition on the top and deleting the assignment inside the Constructor
  constructor(public collection: Sortable) {
    //this.collection = collection;
  }

  // Takes in Array and sorts the numbers inside
  // 'void' because it won't return any Value
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
