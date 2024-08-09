import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  // ? - it can have a 'name' or 'age' but not a must!
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  // gives a pre-configured version of the User (copy of User with all appropriate attributes)
  // attrs - pass in the starting initial properties for creating a new instance of User
  // : User - returns a pre initialized User
  static buildUser(attrs: UserProps): User {
    return new User(
      // first argument needs to satisfy the Model 'attributes' interface
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  // Returns the 'Collection' of Users
  // : Collection - returns an instance of Collection
  static buildUserCollection(): Collection<User, UserProps> {
    // User - the class that is going to be eventually produced
    // UserProps - description of that JSON Object that I will get back from the API or the Array of JSON Objects
    // 2nd argument - passing in a function that takes in an Object of structure UserProps and return an instance of User
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    // this.set({ age: age }); // set the age on Model class
    this.set({ age }); // set the age on Model class (ES6 syntax)
  }

  // User that was synced to some other source of information instead of an API (for instance Local Storage)
  /*   static buildLocalUser(attrs: UserProps): User {
    return new User(
      // first argument needs to satisfy the Model 'attributes' interface
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new LocalSync<UserProps>(rootUrl) // would hace a save and fetch method that saves information to Local Storage instead
    );
  } */
}
