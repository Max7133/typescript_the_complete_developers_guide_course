// Instructions to every other Class
// on how they can be an Argument to 'addMarker'
// As long as they satisfy this Interface, they can be an Argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string; // any time I call this function I need to return a 'string'
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
    const marker = new google.maps.Marker({
      // Property refering to the Map that I want to show this Marker on
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    // every time user clicks on the Marker this function is going to run and inside that Function is where InfoWindow will poppup
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // Options object
        content: mappable.markerContent(),
      });
      // Passing in a reference to the Map that I want to show this window on and a reference to the 'marker' that it will going to show this above
      infoWindow.open(this.googleMap, marker);
    });
  }
}
