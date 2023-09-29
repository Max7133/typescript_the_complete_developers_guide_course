import { User } from './User';
import { Company } from './Company';

// carries the reference to the Google map that I create
export class CustomMap {
  // google.maps.Map - type of this variable (instance of a Class)
  private googleMap: google.maps.Map;

  // initialize and create this Map and show it on the screen
  constructor(divId: string) {
    // map- reference to an HTML Element of where I want to place the map
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // Takes in a User as an Argument and adds a Marker to the Map
  // annotating the Argument as being an instance of a User (I can use Classes a Types as well)
  addUserMarker(user: User): void {
    new google.maps.Marker({
      // Property refering to the Map that I want to show this Marker on
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  // Takes in a Company as an Argument and adds a Marker to the Map
  // annotating the Argument as being an instance of a Company
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      // Property refering to the Map that I want to show this Marker on
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
