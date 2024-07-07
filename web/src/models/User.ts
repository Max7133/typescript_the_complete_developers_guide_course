import { Model } from './Model';

export interface UserProps {
  // ? - it can have a 'name' or 'age' but not a must!
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {}
