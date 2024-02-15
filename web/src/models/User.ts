import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  // ? - it can have a 'name' or 'age' but not a must!
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing(); // type 'Eventing'

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
