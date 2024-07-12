import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T; // takes in no arguments
  get<K extends keyof T>(key: K): T[K]; // takes in Key of K and returns some type where it will look up the T type and find the K property on there
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

// added type constraint T extends HasId
export class Model<T extends HasId> {
  // takes an instance of anything that satisfies ModelAttributes, Sync and Events Interface and it's going to assign them all to Private Properties
  constructor(
    // needs to satisfy ModelAttributes interface
    private attributes: ModelAttributes<T>,
    // needs to satisfy Events interface
    private events: Events,
    // needs to satisfy Sync interface
    private sync: Sync<T>
  ) {}

  /*   get on() {
    return this.events.on;
  } */

  // Shorter Syntax
  // takes Arguments, returns directly the 'on' function from 'this.events'
  on = this.events.on; // because this is a 'getter', I don't need to call the 'on' method, instead, I'm returning a reference to the 'events' Method
  trigger = this.events.trigger;
  get = this.attributes.get;

  // Any time that will 'set' a property, or update some data on User, the event 'change' is going to be triggered
  // Any time this method is called, it will update the 'data' on 'Attributes' and the 'change' Event will be triggered as well
  set(update: T): void {
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
      .save(this.attributes.getAll()) // getAll - gets T === id, name, age
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
