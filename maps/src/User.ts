import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// tells TypeScript that I want to make sure that an instance of class User, satisfies all the Properties required by the Mappable Interface
// basically after 'implements Mappable' TypeScript will point out to this file if the User is implemented correctly
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
