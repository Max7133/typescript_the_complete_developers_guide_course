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
const root = document.getElementById('root');

// Removed error with Type Guard
// is I accidentally render out the app or attempt to render it when I don't have a 'root' Element, it will let me know in the console
if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error('Root element not found');
}
