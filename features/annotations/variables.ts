////////////////////////////////  T Y P E   A N N O T A T I O N S  //////////////////////////////////////////////

// type annotation (is : number)
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
// string[] doesn't say it creates an Array, it's saying that, it gonna have something assigned to colors that is of type Array that contains strings.
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
// making an instance of Class of type Car
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// 1st one is Annotation
// What arguments are going to go into the Function and what different types of values I expect the Function to return.
// 1st (i: number) => void - what type of Value I'm going to assign to "logNumber"
// 2nd half after the = is the Implementation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//// When to use Annotations

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// Using the string with the JSON parse function and turn the string into an actual Object
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20};

//// 2) When we declare a Variable on one line and initialize it later.
let words = ['red', 'green', 'blue'];
// let foundWord = false; how should have been written, that way TS would undestand and not give at type Any:
// , because I set the boolean Value this way On The Same Line!
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // should be a Boolean value or a Number

// when it finds something above 0 inside the Array, I need to assign that Number to Number above 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

////////////////////////////////  T Y P E   I N F E R E N C E  //////////////////////////////////////////////

let color = 'red';
