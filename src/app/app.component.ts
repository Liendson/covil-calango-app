import { Component, OnInit } from '@angular/core';
import { JogadorDTO } from './model/jogador.dto';
import { KEY_USUARIO, StorageService } from './services/storage.service';
import packageJson from '../../package.json';
import { PushNotificationService } from './services/push-notification.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public usuario: JogadorDTO;

  constructor(
    private storageService: StorageService,
    private pushNotificationService: PushNotificationService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.usuario = this.storageService.get(KEY_USUARIO);
    });

  }

  static get version() {
    return packageJson.version;
  }

  ngOnInit(): void {
    this.pushNotificationService.initializeApp();
  }

}
