import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// 'name' and 'age' because => get(propName: string)
console.log(user.get('name')); // myname
console.log(user.get('age')); // 20
