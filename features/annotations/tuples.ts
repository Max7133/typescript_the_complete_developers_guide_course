// Example with an Object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Example with a Tuple

// Type Annotation will show this like an Array: const pepsi: (string | number | boolean) []
// The issue right now is that I could freely swap the order of Elements inside of here, in general I don't want to do that
// because the order inside of a Tuple has a very specific meaning, I have to memorize that for e.g. the 1st Element inside of here represents a Color and so on...
const pepsi = ['brown', true, 40];

// Alternative syntax with Type Alias
type Drink = [string, boolean, number];

// Tuple
const pepsiTuple: Drink = ['brown', true, 40];
//const pepsiTuple: [string, boolean, number] = ['brown', true, 40];
//pepsiTuple[0] = 40; // TS will show: Type 'number' is not assignable to type 'string'

// now instead of writing the Types all over again I can create a new drink like this:
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Why Tuples are NOT that often used
// Example
const carSpecs: [number, number] = [400, 3354]; // what is this 400 and 3354 ???

// How GREAT and understandable it it when using an Object
const carStats = {
  horsepower: 400,
  weight: 3354,
};

// In general, any time when we want to model a record or record it in our application somehow, it's best to stick with JS convention of reaching for an Object as opposed to a Tuple.
