const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // Example of a Function being defined inside of an Object with the Function Annotation
  setAge(age: number): void {
    this.age = age;
  },
};

// If I wanted to put on some Annotation directly onto the Variable here, I could do so with a : and the structure of the "profile" Object
// When using Destructuring, I need to write out the expected structure in this case of "profile" on the right side.
const { age }: { age: number } = profile;

// Destructuring lat and lng
// without Annotation
/* const {
  coords: { lat, lng },
} = profile; */
// with Annotation
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
