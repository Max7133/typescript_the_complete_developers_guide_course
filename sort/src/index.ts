import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection); // passing in inside an Object that has the data I want to sort
console.log(numbersCollection.data); // [-5, 0, 3, 50]

const charactersCollection = new CharactersCollection('Xaayb');
// const sorterCh = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data); // aabXy

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorterLl = new Sorter(linkedList);
linkedList.sort();
linkedList.print(); // -10, -3, 4, 500
