//const carMakers: string[] = ['ford', 'toyoya', 'chevy'];
// I Don't need Annotation if I'm sure what type of content is inside of an Array
const carMakers = ['ford', 'toyoya', 'chevy'];
const dates = [new Date(), new Date()];

// 2 dimensional Arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];
// I add Annotation for e.g. when I don't have any contents in the Array when I initialized it
const unknownArray: string[][] = [];

// Help with Inference when extracting Values
// In this e.g. when pulling an Element from "carMakers" Array, TS will know that I'm going to pull out a String and help me with Type Inference with the new Variable that I'm assigning this Value to
const car = carMakers[0]; // Type Inference come into play and TS knows that this variable is going to be a String
const myCar = carMakers.pop(); // will return an instance of a String

// Prevent incompatible Values
//carMakers.push(100); // will have an Error because 100 is not a String

// Help with 'map'
// I will receive each car as a String and from this I'm going to return a String as well
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// importantDates Array will have 2 different types inside it, some are going to be Instances of Date Object, others will be Strings
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
//importantDates.push(100); // Error, not a String or Date Object
