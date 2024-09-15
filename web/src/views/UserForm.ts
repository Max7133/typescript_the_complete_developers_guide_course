import { User } from '../models/User';

export class UserForm {
  // reference to HTML element
  // the 'parent' element is the HTML element that contains all of the different HTML tied to this current view,
  // , every element inside the browser has a 'querySelectlor' Method tied to it that I can use to search through ALL THE CHILD ELEMENTS to this 'parent'
  // used constructor so it can initialize and declare it at the same time
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  // when the 'model' is received, it will start listening to its 'change' event, and when it's triggered, then the render() is called, which re-renders the 'template' them re-bind all the different Events and then add that HTML to the page
  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  // when is called, it will return an Object with some special Keys & Values
  // : { [key: string]: () => void } - Tells TS that this will return an Object, with the Keys containing Strings, and that the Value for everything inside that Object will be a Function that takes no Arguments and returns nothing.
  eventsMap(): { [key: string]: () => void } {
    // the Keys inside of here are Strings which will contain first a Event Name after a colon, and then the Name of the Element/Selector for the Element that I want to bind the Event handler to
    return {
      'click:.set-age': this.onSetAgeClick,
      // any time that I click on an element that has a Class Name of 'set-name', I will run a Helper Method 'this.onSetNameClick'
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    // pulling text from 'input'
    const name = input.value;
    // update model
    this.model.set({ name }); // any time 'set()' is called, it will trigger a 'change' Event, which will automatically update the TEMPLATE as well
  };

  // onSetAgeClick(): void {
  onSetAgeClick = (): void => {
    // this.model - instance of a User
    this.model.setRandomAge(); // updates Model and changes the age on it
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
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
    // parent - the HTML template itself (so that on every click it wont create a 2nd, 3rd... template on the page)
    // '' - empties out the parent element the it will re-render the template, bind the Events and then stick it in at the 'parent' Element
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    // inserts innerHTML inside this 'template' element
    templateElement.innerHTML = this.template();

    // passing in the DocumentFragment from the template 'element' that was created, which is 'content'
    // DocumentFragment - reference to HTML that is ready to get inserted into the DOM
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content); // '.content' propertu is the actual HTML that I have stuck into the 'templateElement'
  }
}
