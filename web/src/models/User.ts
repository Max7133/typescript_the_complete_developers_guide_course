import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

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
