import { Component, Injector } from '@angular/core';
import { RankingEnum } from 'src/app/enums/ranking.enum';
import { GenericClass } from 'src/app/model/generic.class';
import { ModalEditarPerfilPage } from './modal-editar-perfil/modal-editar-perfil.page';
import { ModalInformacoesPage } from './modal-informacoes/modal-informacoes.page';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { JogadorDTO } from 'src/app/model/jogador.dto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends GenericClass {

  public usuario: JogadorDTO;

  constructor(public injector: Injector, private storageService: StorageService) {
    super(injector);
    this.usuario = this.storageService.get(KEY_USUARIO);
  }

  async openModalPerfil() {
    (await this.modalController.create({
      component: ModalEditarPerfilPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 1
    })).present();
  }

  async openModalInformacoesLiga() {
    // TODO: Consultar parametro de conteudo
    (await this.modalController.create({
      component: ModalInformacoesPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 0.5,
      componentProps: {
        title: 'Informações da Liga',
        content: 'Adicionar aqui as regras da liga JP'
      }
    })).present();
  }

  async openModalInformacoesCalango() {
    // TODO: Consultar parametro de conteudo
    (await this.modalController.create({
      component: ModalInformacoesPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 0.5,
      componentProps: {
        title: 'Sobre a Covil',
        content: `
          Somos um Card Shop, Luderia e Hamburgueria, estamos no endereço Av. Júlia Freire, 1129 - Torre, João Pessoa - PB, BR
          Cobramos um valor de Passaporte de 20 reais, com tempo ilimitado e grátis caso participe de algum evento da loja!
        `
      }
    })).present();
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

  sair() {
    this.storageService.remove(KEY_USUARIO);
    this.router.navigate(['login']);
  }

}
