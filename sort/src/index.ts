// takes the collection of data and
class Sorter {
  // Array of Numbers
  //collection: number[];

  // added 'public' so then I won't need to specify the Field definition on the top and deleting the assignment inside the Constructor
  constructor(public collection: number[] | string) {
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
        // All of this only works if collection is a number[]
        // comparing a pair of Number each go round
        // if 'j' Element is greater it will swap those 2 Elements
        // Run this logic only if collection is an Array of Numbers
        //// typeof - for primitive types such as 'number', 'string', 'boolean', 'symbol'
        //// instanceof - is for whatever the 'constructor()' is for the type we are trying to check for
        //// TYPE GUARD for whatever the 'constructor()' is for the Type we are trying to check for - restores access to one of the specific types that it's dealing with inside of a Union Operartor "|"
        if (this.collection instanceof Array) {
          // this.collection. - will show now only properties and methods for an Array (because of TypeScript and Type Guard)
          // At this point collection === number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]; // get's the reference of the Element on the LEFT hand side
            this.collection[j] = this.collection[j + 1]; // takes the RIGHT hand side and throws it over to the LEFT
            this.collection[j + 1] = leftHand; // takes the LEFT hand side and throws it over to the RIGHT
          }
        }

        // Only going to work if collection is a String
        // If collection is a String, do this logic intead:
        // ¬¬¬logic to compare and swap characters in a String
        //// TYPE GUARD for Primitive Value - restores access to one of the specific types that it's dealing with inside of a Union Operartor "|"
        if (typeof this.collection === 'string') {
          // this.collection. - will show now only properties and methods for a String (because of TypeScript and Type Guard)
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
