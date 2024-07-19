import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

// User - the class that is going to be eventually produced
// UserProps - description of that JSON Object that I will get back from the API or the Array of JSON Objects
// 2nd argument - passing in a function that takes in an Object of structure UserProps and return an instance of User
const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

// get notification when the 'fetch' has been completed
collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
