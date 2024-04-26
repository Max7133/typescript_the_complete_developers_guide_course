import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  // ? - it can have a 'name' or 'age' but not a must!
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing(); // type 'Eventing'
  // Whenever an instance of a User is created, it's going to get Public Property 'sync' that's going to an instance of the Sync class, where the intefrace 'UserProps' is going to be used
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl); // whenever an instance of 'sync' is created, a URL needs to be passed to use it as the root URL
}
