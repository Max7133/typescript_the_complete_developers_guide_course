import { User } from './models/User';

// assigning an ID to an instance of User
//const user = new User({ id: 1 });

// testing for updating the info of the particular User
//user.set({ name: 'NEW NAME', age: 35 });

//user.save();

// testing for creating new User
//const newUser = new User({ name: 'new user', age: 0 });

//newUser.save();

//
/* user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change'); */

/* // creating a new User
// 2nd Arg - Object that represents the Properties that this User has
axios.get('http://localhost:3000/users/2'); */

/* import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// Update the 'name' and 'age'
user.set({ name: 'Max' });

// 'name' and 'age' because => get(propName: string)
console.log(user.get('name')); // Max
console.log(user.get('age')); // 20

// testing adding the events
user.on('change', () => {
  console.log('Change #1'); // 2 outputs because of user.trigger('change') OUTPUT: Change #1
});
user.on('change', () => {
  console.log('Change #2'); // 2 outputs because of user.trigger('change') OUTPUT: Change #2
});
user.on('save', () => {
  console.log('Save was triggered');
});

// for making sure it works, Ill check the entire 'user' and look fot it's 'events property' and check that it has a 'change property' with at least 1 registered function
// console.log(user); // User {data: {…}, events: {…}} (inside 'events' there is a Key 'change' with 1 registed Function with it)

// triggering Events
user.trigger('change'); */

// taking all the 'attributes' this User has and then save them to the JSON server
const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('user was changed');
}); // returns the 'on' Function from the 'Eventing' class.
