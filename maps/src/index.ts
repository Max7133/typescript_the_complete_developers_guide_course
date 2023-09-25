/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

const user = new User();

console.log(user);

const company = new Company();
console.log(company);

// mapDiv - reference to an HTML Element of where I want to place the map
new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
