// Type is an Argument to the 'class' TypeOfData
class HoldAnything<TypeOfData> {
  data!: TypeOfData;

  // It is possible to use the Generic for anything inside the 'class' body that I want
  add(a: TypeOfData): TypeOfData {
    return a;
  }
}

// when defining a Generic, then pass in a Type for this Generic
// when creating a instance of the class, then pass in an Argument of sorts to customize how the 'class' works
const holdNumber = new HoldAnything<number>(); // <number> - the Type that's going to be used inside of the 'class' body (now, everywhere the is TypeOfData, it gets replaced with <number> instead
holdNumber.data = 123;
holdNumber.add(10);

// now I can reuse this 'class' definition as many times as I want with Different Types
const holdString = new HoldAnything<string>(); // now this Type String is going to replace TypeOfData everywhere inside the 'class' body, same as number
holdString.data = 'string';

// Treat Generics like Function Arguments! By convention Generics are called with a single letter, so instead of 'TypeOfData' I would called it 'T' //
