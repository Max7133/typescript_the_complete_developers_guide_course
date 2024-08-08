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
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  onHeaderHover(): void {
    console.log('H1 was hovered over');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      // eventName = 'click'
      // selector = 'button'
      const [eventName, selector] = eventKey.split(':');

      // finds all the different Elements inside the 'fragment', that match that 'selector'
      // so then it can iterate over that Array, and for every Element that will match, it will attach whatever Event handler it had referenced, in this caase 'onButtonClick'
      // forEach for all those different Elements that it returns, set up Event Handler, 1st Arg watches for 'eventName', 2nd Arg Callback Function which is the Value inside - eventsMap[eventKey]
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  // takes the 'template' and appends it as a Child to the Parent
  render(): void {
    const templateElement = document.createElement('template');
    // inserts innerHTML inside this 'template' element
    templateElement.innerHTML = this.template();

    // passing in the DocumentFragment from the template 'element' that was created, which is 'content'
    // DocumentFragment - reference to HTML that is ready to get inserted into the DOM
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content); // '.content' propertu is the actual HTML that I have stuck into the 'templateElement'
  }
}
