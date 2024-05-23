import { UserProps } from './User';

export class Attributes<T extends object> {
  // 'data' - has all the custom info about the User
  constructor(private data: T) {}

  // will be called with some 'key' - name of the property that I try to retrieve
  // K & T - represents some kind of TYPE
  // <K extends keyof T> - sets up a Generic Constraint (A Constraint limits the types that K in this case can be.)
  // the Value or Type of K can only ever be one of the 'keys' of T (keyof T)
  // <K extends keyof T> - means that the TYPE of K can only ever be 1 of the different keys of T (name, age, id)
  // (key: K) - whatever Argument I'm passing in is going to be of TYPE K
  // since K can only ever be one of the different TYPES/KEYS of T, that means that I can only call 'get' with either a 'name', 'age', 'ID' as Strings
  // T[K] - return TYPE Annotation is essentially the same as a normal Object lookup. For instance: const colors = {red: 'red'}; colors['red']
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
  // when I call set(), it will then pass in some Object that contains all the different updates that I want to make to the User
  set(update: T): void {
    // Object.assign() is going to take 2 Objects, the 2nd Object that I pass in is going to have all of its Properties taken and copied over to the 1st Object
    // data - is the Object that records all the information about a particular User
    // then, take the 'update Object' that I passed in and pass it in as this 2nd Argument
    // Essentially, this basically says take all the Properties on 'update' and all the values in there and just copy paste them over onto this 'data' and override all the Properties on this 'data'.
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'asdf',
});

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');
