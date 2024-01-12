// Everytime when we create an Interface, we are creating a New Type
interface Reportable {
  summary(): string; // anything that wants to be a vehicle has to have a Function called summary that returns a String
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  // const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken?: ${vehicle.broken}`);
};

// Calling printVehicle and passing in oldCivic
printSummary(oldCivic);
// I can call also printSummary with (drink) as well
printSummary(drink);
//// THE POINT IS that we can use a single Interface to describe the shape or the Different Properties of Very Different Objects
//// when doing so, we can have those Objects implement Different Properties or Different Functions
//// by doing so we can make these very different Objects interact with different Functions that we create like for e.g. printSummary()
//// So in doing so, we've now got a much more Reusable Function printSummary inside this application
//// This Function can now be used with any type of Object that satisfies the Reportable Interface.
