import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// Update the 'name' and 'age'
user.set({ name: 'Max' });

// 'name' and 'age' because => get(propName: string)
console.log(user.get('name')); // Max
console.log(user.get('age')); // 20
