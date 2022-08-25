import { Component } from '@angular/core';
import { GenericClass } from 'src/app/utils/generic.class';
import { ModalCreditosPage } from './modal-creditos/modal-creditos.page';
import { ModalEditarPerfilPage } from './modal-editar-perfil/modal-editar-perfil.page';
import { ModalInformacoesPage } from './modal-informacoes/modal-informacoes.page';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage extends GenericClass {

  async openModalPerfil() {
    (await this.modalController.create({
      component: ModalEditarPerfilPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 1
    })).present();
  }

  async openModalCreditos() {
    (await this.modalController.create({
      component: ModalCreditosPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 1
    })).present();
  }

  async openModalInformacoes() {
    (await this.modalController.create({
      component: ModalInformacoesPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 1
    })).present();
  }
}
