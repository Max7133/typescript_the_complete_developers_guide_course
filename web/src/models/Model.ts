import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T; // takes in no arguments
  get<K extends keyof T>(key: K): T[K]; // takes in Key of K and returns some type where it will look up the T type and find the K property on there
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model {}
