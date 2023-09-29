/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
// passing in the Id of the Element I want to render this Map into
const customMap = new CustomMap('map');
const company = new Company();

console.log(user);
console.log(company);

customMap.addMarker(user);
customMap.addMarker(company);
