/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { StorageService } from './storage.service';
import { ParametrosService } from './parametros.service';

export const FCM_TOKEN = 'push_notification_token';

@Injectable({ providedIn: 'root' })
export class PushNotificationService {

  constructor(
    private platform: Platform,
    private storageService: StorageService,
    private parametroService: ParametrosService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.setupPushNotifications();
    });
}

  async setupPushNotifications() {
    const result = await PushNotifications.requestPermissions();

    PushNotifications.register();
    // if (result?.receive === 'granted') {
    //   // Registro para receber notificações push
    // } else {
    //   console.log('Permissões de notificação push negadas.', result);
    //   return;
    // }

    // Manipulador para o token de registro
    PushNotifications.addListener('registration', (token) => {
      console.log('Token de registro de push: ', token.value);
      // *** ENVIE ESTE TOKEN PARA O SEU BACKEND ***
      this.sendTokenToBackend(token.value);
    });

    // Manipulador para erros de registro
    PushNotifications.addListener('registrationError', (err) => {
      console.error('Erro ao registrar para push: ', err.error);
      this.sendTokenToBackend('DEU ERRO!');
    });

    // (Opcional) Manipuladores para notificações recebidas e ações na notificação
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Notificação push recebida: ', notification);
      // Lógica para exibir a notificação no aplicativo, se necessário
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
      console.log('Ação na notificação push realizada', action);
      // Lógica para lidar com o clique na notificação
    });
  }

  sendTokenToBackend(token: string) {
    // Implemente a chamada HTTP para o seu backend para salvar o token associado ao usuário.
    this.storageService.set(FCM_TOKEN, token);
  }

}
