/* import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
 */

import { UserForm } from './views/UserForm';

// gets a reference to the <div> with id="root" and pass it into the userForm as the Parent
const userForm = new UserForm(document.getElementById('root'));

userForm.render();
