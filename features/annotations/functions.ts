const add = (a: number, b: number) => {
  return a + b;
};

// I will always need to return Annotations after Parameters (a, b): number => {"
// because I could easily make a mistake inside of a Function and forget to return a Value or Incorrect type
// if I do so, TS is NOT going to show me the Error, it would just think that's what I meant to do and assign there a different type for e.g.
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Alternate forms of syntax around Annotations for Functions (EXACT SAME WAY)
function divide(a: number, b: number): number {
  return a / b;
}
// This works also for Anonymous Functions assingned Variables to (EXACT SAME WAY)
const multiply = function (a: number, b: number): number {
  return a * b;
};

// when I don't need to return anything
const logger = (message: string): void => {
  console.log(message);
};

// : never - Means that it will never actually going to reach the end of this Function
/* const throwError = (message: string): never => {
  throw new Error(message);
}; */
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// ES 2015 destructuring
/* const logWeather = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
}; */

// Destructuring the "logWeather" with TypeScript
// I did Not try to stick the Annotation types along with the Destructuring,
// the Destructuring portion and the Annotation are always going to be 2 separate statements separated by that (: COLON)
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
