// Example of GENERICS with Classes

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
