// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean; // boolean is going to tell whether or not those 2 El. need to be swapped
//   swap(leftIndex: number, rightIndex: number): void;
// }

// takes the collection of data and
// abstract class - I don't need to create an instance from it
export abstract class Sorter {
  // and promising that length(), compare() and swap() eventually will be defined
  // 'abstract' is used to mark certain Methods as existing in the future or essentially implemented by some Child Class
  abstract compare(leftIndex: number, rightIndex: number): boolean; // I haven't even implemented it, and the Error bellow on 'this.compare' is gone
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number; // shorter because 'length' is a Getter and I'm going to use it like a simple Property

  // Array of Numbers
  //collection: number[];

  // added 'public' so then I won't need to specify the Field definition on the top and deleting the assignment inside the Constructor
  // constructor(public collection: Sortable) {
  // this.collection = collection;
  // }

  // Takes in Array and sorts the numbers inside
  // 'void' because it won't return any Value
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
