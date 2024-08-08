export class UserForm {
  // reference to HTML element
  // used constructor so it can initialize and declare it at the same time
  constructor(public parent: Element) {}

  // when is called, it will return an Object with some special Keys & Values
  // : { [key: string]: () => void } - Tells TS that this will return an Object, with the Keys containing Strings, and that the Value for everything inside that Object will be a Function that takes no Arguments and returns nothing.
  eventsMap(): { [key: string]: () => void } {
    // the Keys inside of here are Strings which will contain first a Event Name after a colon, and then the Name of the Element/Selector for the Element that I want to bind the Event handler to
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
      </div>
    `;
  }

  // takes the 'template' and appends it as a Child to the Parent
  render(): void {
    const templateElement = document.createElement('template');
    // inserts innerHTML inside this 'template' element
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content); // '.content' propertu is the actual HTML that I have stuck into the 'templateElement'
  }
}
