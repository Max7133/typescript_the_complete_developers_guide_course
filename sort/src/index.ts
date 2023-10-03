// takes the collection of data and
class Sorter {
  // Array of Numbers
  //collection: number[];

  // added 'public' so then I won't need to specify the Field definition on the top and deleting the assignment inside the Constructor
  constructor(public collection: number[]) {
    //this.collection = collection;
  }

  // Takes in Array and sorts the numbers inside
  // 'void' because it won't return any Value
  sort(): void {
    const { length } = this.collection;

    // - i - accouting that after it does a full first iteration through the Array, the rightmost Element will be in the correct location
    // therefore, I don't need to have to try to resort that again in the future
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // comparing a pair of Number each go round
        // if 'j' Element is greater it will swap those 2 Elements
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j]; // get's the reference of the Element on the LEFT hand side
          this.collection[j] = this.collection[j + 1]; // takes the RIGHT hand side and throws it over to the LEFT
          this.collection[j + 1] = leftHand; // takes the LEFT hand side and throws it over to the RIGHT
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
