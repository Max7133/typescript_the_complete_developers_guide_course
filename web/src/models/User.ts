interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}

  // will be called with some propName - name of the property that I try to retrieve
  get(propName: string): number | string {
    return this.data[propName];
  }
}
