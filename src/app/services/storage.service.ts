import { Injectable } from '@angular/core';

export const KEY_USUARIO = 'USUARIO';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any): void {
    const val = JSON.stringify(value);
    localStorage.setItem(key, val);
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key)) ;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
