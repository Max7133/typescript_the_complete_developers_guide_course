import { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

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
  // Public 'attributes' is going to be an instance of attributes, with the TYPE T generic type as being the UserProps interface
  public attributes: Attributes<UserProps>;

  // receives starting 'attributes' for the User
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
  // takes Arguments, returns directly the 'on' function from 'this.events'
  get on() {
    return this.events.on; // because this is a 'getter', I don't need to call the 'on' method, instead, I'm returning a reference to the 'events' Method
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  // Any time that will 'set' a property, or update some data on User, the event 'change' is going to be triggered
  // Any time this method is called, it will update the 'data' on 'Attributes' and the 'change' Event will be triggered as well
  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  // gets the current 'id' of 'attributes', and only if it has an 'id', then it will call the 'fetch' Method on 'sync'
  // then it will wait fot the request to be resolved, a get a response back from JSON server, then it's going to take that info I get and set it on the 'attributes' instance
  fetch(): void {
    const id = this.get('id');

    // if 'id' doesn't exist, if it's not a number or undefined
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    // when I have 'id', call the 'fetch' Method on 'sync'
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data); // updates 'attributes' and triggers 'change' event
    });
  }
  // pulls off all different properties off the User class, specifically off the 'attributes' Property
  // then it will save all the info to the JSON server
  save(): void {
    this.sync
      .save(this.attributes.getAll()) // getAll - gets T which is <UserProps> === id, name, age
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
