import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { KEY_USUARIO, StorageService } from '../services/storage.service';
import { JogadorDTO } from '../model/jogador.dto';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(route, state) {
    const usuario: JogadorDTO = this.storageService.get(KEY_USUARIO) as JogadorDTO;
    if (usuario?.id) {
      return true;
    }
    this.router.navigate(['login']);
    return true;
  }

}
