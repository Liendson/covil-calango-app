import { Component, Injector } from '@angular/core';
import { GenericClass } from 'src/app/model/generic.class';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { ModalInformarNomePage } from './modal-informar-nome/modal-informar-nome.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends GenericClass {

  constructor(
    public injector: Injector,
    private storageService: StorageService
  ) {
    super(injector);
  }

  realizarLogin() {
    this.storageService.set(KEY_USUARIO, new JogadorDTO(null, null, null, null, null));
    this.router.navigate(['/home']);
  }

  async openModalInformarNome() {
    (await this.modalController.create({
      component: ModalInformarNomePage,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
    })).present();
  }
}
