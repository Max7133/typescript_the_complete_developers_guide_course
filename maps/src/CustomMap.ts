// Instructions to every other Class
// on how they can be an Argument to 'addMarker'
// As long as they satisfy this Interface, they can be an Argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

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

  // (I can use Classes as Types as well)
  // A Single Value inside of TypeScript can have multiple different Types
  // It can take any Argument so long as it satisfies the Interface 'Mappable'
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      // Property refering to the Map that I want to show this Marker on
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
