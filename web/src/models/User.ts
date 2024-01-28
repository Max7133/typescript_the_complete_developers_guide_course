interface UserProps {
  // ? - it can have a 'name' or 'age' but not a must!
  name?: string;
  age?: number;
}

// Type Alias for a Empty Function (no Arg and no return values)
type Callback = () => {};

export class User {
  // Stores all the different Events that get registered
  // all the 'key's' are going to be Strings, and the Value is going to be an Array of Callback Functions
  // [key: string] - because I don't know yet what Properties this Object is going to have
  // I don't need to pass 'events' when creating an instance of the User, that's why I will NOT add it to the 'constructor'
  // I only going to allow 'events' to be registered after a User has been created. (that's why I added this as a sepparate Property)
  events: { [key: string]: Callback[] } = {};

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
  // called with some 'eventName' of Event that is a String
  // 2nd Arg - callback function
  on(eventName: string, callback: Callback) {}
}
