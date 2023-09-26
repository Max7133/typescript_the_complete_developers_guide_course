/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();

// passing in the Id of the Element I want to render this Map into
new CustomMap('map');

console.log(user);

const company = new Company();
console.log(company);
