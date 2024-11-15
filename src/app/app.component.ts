import { Component } from '@angular/core';
import { JogadorDTO } from './model/jogador.dto';
import { KEY_USUARIO, StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public usuario: JogadorDTO;

  constructor(private storageService: StorageService) {
    this.usuario = this.storageService.get(KEY_USUARIO);
  }

}
