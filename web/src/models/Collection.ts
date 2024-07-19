import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = []; // list of, for instance Users that were fetched
  events: Eventing = new Eventing(); // for instance it will show when it successfully fetched the list of Users

  // json - is for instance the UserProps looking Object, that has the name, id and age,
  // and it's going to take an argument of type K and the it's going to eventually return something of type T, which is the actual thing that I'm storing inside the Model Array
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  // making sure that other class or locations inside of the code can directly call on(), trigger() on Collection class
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    // get JSON data and turn each of those Objects into an instance of User and add it into Models Array
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      // K - for instance JSON data
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value)); // pushes in the JSON data it gets, and it will get back an instance of Model, which will add into the Array of Models
      });
      // after loop, trigger change event
      this.trigger('change');
    });
  }
}
