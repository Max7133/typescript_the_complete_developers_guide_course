import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

// extends "HasId" - to make sure that TS knows that whatever type I use with 'class Sync' is going to satisfy this 'interface'
export class Sync<T extends HasId> {
  // passing in the rootUrl for making these requests as an Argument to class Sync when creating an instance of it
  constructor(public rootUrl: string) {}

  // whenever I call fetch, it must be called with an ID that has to be a number
  // return AxiosPromise because when I call Axios, I get back a promise and it is a promise that is implemented by the Axios library
  fetch(id: number): AxiosPromise {
    // Get request (retrieve User with the given ID)
    return axios.get(`${this.rootUrl}/${id}`);
  }

  // saves some data about the User to the server
  // returns AxiosPromise, so that whenever I call 'save()', I will get back some Object that I can use to determine whether or not the user was correctly persisted
  save(data: T): AxiosPromise {
    //const id = data.id;
    const { id } = data;

    if (id) {
      // if there is a User (updates the info of the User)
      // 2nd Arg = data
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // if there is no User
      // 2nd Arg = data (all the info I want to send)
      return axios.post(this.rootUrl, data);
    }
  }
}
