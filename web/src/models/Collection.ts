import axios, { AxiosResponse } from 'axios';
import { User, UserProps } from './User';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = []; // list of Users that were fetched
  events: Eventing = new Eventing(); // for instance it will show when it successfully fetched the list of Users

  constructor(public rootUrl: string) {}

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
      response.data.forEach((value: UserProps) => {
        // taking the value and putting it into User.buildUser that will create a User
        const user = User.buildUser(value);
        this.models.push(user); // push User ro Models Array
      });
      // after loop, trigger change event
      this.trigger('change');
    });
  }
}
