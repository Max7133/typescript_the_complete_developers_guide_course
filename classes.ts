class Vehicle {
  // Adding 2 FIELDS - are Properties that are going to reference Actual Values
  // color: string; // Means every time we create an instance of class Vehicle, the Instance will have a color Property that is a String, and its starting Value will be = RED

  constructor(public color: string) {
    //this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.honk(); // Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // If I want a Car class to have a different implementation of Drive than the Parent Class Vehicle
  // then I need to overwrite a Method here from the Parent Class
  private drive(): void {
    console.log('vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
