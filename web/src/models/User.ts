import axios, { AxiosResponse } from 'axios';

interface UserProps {
  // ? - it can have a 'name' or 'age' but not a must!
  id?: number;
  name?: string;
  age?: number;
}

// Type Alias for a Empty Function (no Arg and no return values)
type Callback = () => void;

export class User {
  // Stores all the different Events that get registered
  // all the 'key's' are going to be Strings, and the Value is going to be an Array of Callback Functions
  // [key: string] - because I don't know yet what Properties this Object is going to have
  // I don't need to pass 'events' when creating an instance of the User, that's why I will NOT add it to the 'constructor'
  // I only going to allow 'events' to be registered after a User has been created. (that's why I added this as a sepparate Property)
  events: { [key: string]: Callback[] } = {};

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
  // called with some 'eventName' of Event that is a String
  // 2nd Arg - callback function
  on(eventName: string, callback: Callback): void {
    // when it first creates a User, it will look at 'this.events' and look up 'eventName' that's going to give possibly 'undefined', if it does, then it will just fall back to assigning an Empty Array to 'handlers'
    // when 'this.events[eventName]' is defined, then it will take the Array of Callbacks that I've had already created and assign it to 'handlers' instead.
    // either way 'handlers' is going to be an Array
    const handlers = this.events[eventName] || [];
    // after getting that Array, it will add in the brand new Callback that was passed into the 'on()'
    handlers.push(callback);
    // then it will take the 'handlers' Array and assign it back to 'this.events' Object
    this.events[eventName] = handlers;
  }

  // will trigger all the different callbacks registered to some particular Event
  trigger(eventName: string): void {
    // checks if it has some registered events with this given 'eventName'
    const handlers = this.events[eventName];
    // if 'handlers' is defined and if it is an Array, then 'return' early
    if (!handlers || handlers.length === 0) {
      return;
    }
    // if there are some defined 'handlers' Array, then call all those Callbacks right after I have that early return
    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    // Get request (retrieve User with the given ID)
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  // saves some data about the USer to the server
  save(): void {
    const id = this.get('id');
    if (id) {
      // if there is a User (updates the info of the User)
      // 2nd Arg = data
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // if there is no User
      // 2nd Arg = data (all the info I want to send)
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
