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
}
