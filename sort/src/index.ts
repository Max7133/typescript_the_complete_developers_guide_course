import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection); // passing in inside an Object that has the data I want to sort
sorter.sort();
console.log(numbersCollection.data);
