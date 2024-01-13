////////// Example of GENERICS with Classes

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  // retrieves some element from the 'collection' of Numvers
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// To avoid duplicating classes with the same functionality, this generic class will solve the problem
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// I haven't specified that it's a <string>
const arr = new ArrayOfAnything(['a', 'b', 'c']); // if I hover over, it will show "const arr: ArrayOfAnything<string>" - Because of Type Inference

////////// Example of GENERICS with Functions

// Each of these functions will receive either an Array of Strings or an Array of Numbers
// Both of them are going to iterate through that Array and attempt to "console.log" out each Element inside of that Array
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Function that can receive ANY TYPE of Array
// <T> Array of Type ANYTHING
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// bad way, because I could have written Numbers instead of Strings
printAnything(['a', 'b', 'c']); // if I hover over, it will show "function printAnything<string>(arr: string[]): void" - Because of Type Inference

// example
printAnything<string>([1, 2, 3]); // ERROR: Type 'number' is not assignable to type 'string'.

////////// Generic Constraints
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// Generic Function that will take an Array of either Cars or Houses, loop through the Array, and then call the "print()" on each Element
// <T extends Printable> - the Constraint, it will tell TS that whatever type <T> I put in here, it's going to have all the Properties that the Inteface Printable has
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    // arr[i].print(); // error: because there might be a situation where I will call a "number" on a print(), and Numbers do not have a built in print()
    arr[i].print(); // the error will go away after the Constaint
  }
}

printHousesOrCars([1, 2, 3, 4]); // and only now it will show the Error here, because I pass in Number that do not have a built in print()
printHousesOrCars<House>([new House(), new House()]); // no errors
printHousesOrCars<Car>([new Car(), new Car()]); // no errors
