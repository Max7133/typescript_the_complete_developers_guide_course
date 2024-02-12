// Type Alias for a Empty Function (no Arg and no return values)
type Callback = () => void;

// class responsible for handling all the different Events tied to a User
export class Eventing {
  // Stores all the different Events that get registered
  // all the 'key's' are going to be Strings, and the Value is going to be an Array of Callback Functions
  // [key: string] - because I don't know yet what Properties this Object is going to have
  // I don't need to pass 'events' when creating an instance of the User, that's why I will NOT add it to the 'constructor'
  // I only going to allow 'events' to be registered after a User has been created. (that's why I added this as a sepparate Property)
  events: { [key: string]: Callback[] } = {};
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
}
