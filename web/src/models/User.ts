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

  // 'data' - has all the custom info about the User
  constructor(private data: UserProps) {}

  // will be called with some propName - name of the property that I try to retrieve
  get(propName: string): number | string {
    return this.data[propName];
  }
  // when I call set(), it will then pass in some Object that contains all the different updates that I want to make to the User
  set(update: UserProps): void {
    // Object.assign() is going to take 2 Objects, the 2nd Object that I pass in is going to have all of its Properties taken and copied over to the 1st Object
    // data - is the Object that records all the information about a particular User
    // then, take the 'update Object' that I passed in and pass it in as this 2nd Argument
    // Essentially, this basically says take all the Properties on 'update' and all the values in there and just copy paste them over onto this 'data' and override all the Properties on this 'data'.
    Object.assign(this.data, update);
  }
}
