import { User } from './User';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = []; // list of Users that were fetched
  events: Eventing = new Eventing(); // for instance it will show when it successfully fetched the list of Users

  // making sure that other class or locations inside of the code can directly call on(), trigger() on Collection class
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
