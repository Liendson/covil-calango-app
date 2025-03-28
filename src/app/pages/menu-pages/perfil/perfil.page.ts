import { Component, Injector } from '@angular/core';
import { RankingEnum } from 'src/app/enums/ranking.enum';
import { GenericClass } from 'src/app/model/generic.class';
import { ModalEditarPerfilPage } from './modal-editar-perfil/modal-editar-perfil.page';
import { ModalInformacoesPage } from './modal-informacoes/modal-informacoes.page';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { ComandaService } from 'src/app/services/comanda.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppComponent } from 'src/app/app.component';
import { IonBackButtonDelegate, Platform } from '@ionic/angular';

const PARAMETRO_REGRA_PERMANENCIA = 'PARAMETRO_REGRA_PERMANENCIA';
const PARAMETRO_INFORMACOES_CALANGO = 'PARAMETRO_INFORMACOES_CALANGO';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends GenericClass {

  public usuario: JogadorDTO;
  public modalAberto: HTMLIonModalElement;

  constructor(
    public injector: Injector,
    private storageService: StorageService,
    private comandaService: ComandaService,
    private parametrosService: ParametrosService,
    private platform: Platform
  ) {
    super(injector);
    this.platform.backButton.subscribeWithPriority(0, async () => {
      if (this.modalAberto) {
        await this.modalAberto.dismiss();
      } else {
        window.history.back();
      }
    });
    this.usuario = this.storageService.get(KEY_USUARIO);
  }

  get version() {
    return AppComponent.version;
  }

  async openModalPerfil() {
    (await this.modalController.create({
      component: ModalEditarPerfilPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 0.5
    })).present();
  }

  async openModalRegrasPermanencia() {
    this.parametrosService.getByName(PARAMETRO_REGRA_PERMANENCIA).subscribe(async res => {
      this.modalAberto  = await this.modalController.create({
        component: ModalInformacoesPage,
        breakpoints: [0.5, 1],
        initialBreakpoint: 0.5,
        componentProps: {
          title: 'Regras de Permanência',
          content: res.descricao
        }
      });
      await this.modalAberto.present();
    });
  }

  async openModalInformacoesCalango() {
    this.parametrosService.getByName(PARAMETRO_INFORMACOES_CALANGO).subscribe(async res => {
      this.modalAberto = await this.modalController.create({
        component: ModalInformacoesPage,
        breakpoints: [0.5, 1],
        initialBreakpoint: 0.5,
        componentProps: {
          title: 'Sobre a Covil',
          content: res.descricao
        }
      });
      await this.modalAberto.present();
    });
  }

  obterRankingUsuario(pontos: number) {
    switch (true) {
      case pontos >= 81920:
        return RankingEnum.DIAMANTE1;
      case pontos >= 40960:
        return RankingEnum.DIAMANTE2;
      case pontos >= 20480:
        return RankingEnum.DIAMANTE3;
      case pontos >= 10240:
        return RankingEnum.PLATINA1;
      case pontos >= 5120:
        return RankingEnum.PLATINA2;
      case pontos >= 2560:
        return RankingEnum.PLATINA3;
      case pontos >= 1280:
        return RankingEnum.OURO1;
      case pontos >= 640:
        return RankingEnum.OURO2;
      case pontos >= 320:
        return RankingEnum.OURO3;
      case pontos >= 160:
        return RankingEnum.PRATA1;
      case pontos >= 80:
        return RankingEnum.PRATA2;
      case pontos >= 40:
        return RankingEnum.PRATA3;
      case pontos >= 20:
        return RankingEnum.BRONZE1;
      case pontos >= 10:
        return RankingEnum.BRONZE2;
      case pontos >= 5:
        return RankingEnum.BRONZE3;
      case pontos === 0:
        return RankingEnum.UNRANKED;
    }
  }

  async sair() {
    const alert = await this.alertController.create({
      message: `Ao sair, sua comanda será encerrada, vá até ao balcão para realizar o pagamento, ok?`,
      buttons: [
        {
          text: 'Certo, estou indo!',
          handler: () => {
            this.comandaService.fecharComanda(this.storageService.getNumeroDaComanda()).subscribe(() => {
              this.storageService.remove(KEY_USUARIO);
              this.modalController.dismiss();
              this.router.navigate(['login']);
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
