import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// Update the 'name' and 'age'
user.set({ name: 'Max' });

// 'name' and 'age' because => get(propName: string)
console.log(user.get('name')); // Max
console.log(user.get('age')); // 20

// testing adding the events
user.on('change', () => {});

// for making sure it works, Ill check the entire 'user' and look fot it's 'events property' and check that it has a 'change property' with at least 1 registered function
console.log(user); // User {data: {…}, events: {…}} (inside 'events' there is a Key 'change' with 1 registed Function with it)
