/* import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
 */

import { UserForm } from './views/UserForm';
import { User } from './models/User';

// create a instance of User
const user = User.buildUser({ name: 'NAME', age: 20 });

// gets a reference to the <div> with id="root" and pass it into the userForm as the Parent
const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
