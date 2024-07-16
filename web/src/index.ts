import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

// get notification when the 'fetch' has been completed
collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
