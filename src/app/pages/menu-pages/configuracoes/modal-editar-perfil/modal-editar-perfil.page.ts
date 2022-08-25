import { Component, OnInit } from '@angular/core';
import { GenericClass } from 'src/app/utils/generic.class';

@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.page.html',
  styleUrls: ['./modal-editar-perfil.page.scss'],
})
export class ModalEditarPerfilPage extends GenericClass implements OnInit {

  ngOnInit() {
  }

  async salvarPerfil() {
    (await this.alertController.create({
      message: 'Perfil salvo com sucesso!',
      buttons: ['OK']
    })).present();
  }

}
