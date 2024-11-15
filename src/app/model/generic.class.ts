import { HttpClient } from '@angular/common/http';
import { Directive, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Directive()
export abstract class GenericClass {

  // Variáveis Globais
  public baseUrl = environment.url;

  // Angular Commons
  public router: Router;
  public httpClient: HttpClient;

  // Ionic Commons
  public modalController: ModalController;
  public alertController: AlertController;

  constructor(public injector: Injector) {
    this.router = this.injector.get(Router);
    this.httpClient = this.injector.get(HttpClient);
    this.alertController = this.injector.get(AlertController);
    this.modalController = this.injector.get(ModalController);
  }

  toRoute(url) {
    this.router.navigate([url]);
  }

}
