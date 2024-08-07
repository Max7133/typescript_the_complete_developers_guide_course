export class UserForm {
  // reference to HTML element
  // used constructor so it can initialize and declare it at the same time
  constructor(public parent: Element) {}

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
