import { Injectable } from '@angular/core';
import { JogadorDTO } from '../model/jogador.dto';

export const KEY_USUARIO = 'USUARIO';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getNumeroDaComanda(): number | string {
    return this.get<JogadorDTO>(KEY_USUARIO).comanda.numero;
  }

  get<T>(key: string): T | null {
    const now = Date.now();
    const expiresIn = localStorage.getItem(`${key}_expiresIn`);
    const expirationTime = expiresIn ? parseInt(expiresIn, 10) : 0;

    if (expirationTime < now) {
      this.remove(key);
      return null;
    } else {
      const value = localStorage.getItem(key);
      if (!value) {
        return null;
      };
      return JSON.parse(value) as T;
    }
  }

  set(key: string, value: any, expires: number | undefined = 24 * 60 * 60): void {
    expires = expires ? Math.abs(expires) : 24 * 60 * 60;

    const now = Date.now();
    const schedule = now + expires * 1000;

    localStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem(`${key}_expiresIn`, schedule.toString());
  }

  remove(key: string): void {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_expiresIn`);
  }
}
