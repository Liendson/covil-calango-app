import { Component, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/utils/generic.class';
import { ModalAddJogadorPage } from './modal-add-jogador/modal-add-jogador.page';

@Component({
  selector: 'app-criar-torneio',
  templateUrl: './criar-torneio.page.html',
  styleUrls: ['./criar-torneio.page.scss'],
})
export class CriarTorneioPage extends GenericClass {

  get listaDeJogadoresIncluidos() {
    return CriarTorneioPage.listaDeJogadoresIncluidos;
  }

  public static listaDeJogadoresIncluidos: JogadorDTO[] = [];

  constructor(public injector: Injector) {
    super(injector);
  }

  async openModal() {
    (await this.modalController.create({
      component: ModalAddJogadorPage,
      breakpoints: [0.5, 1],
      initialBreakpoint: 0.5
    })).present();
  }

  removerJogador(index) {
    CriarTorneioPage.listaDeJogadoresIncluidos.splice(index, 1);
  }

  async salvar() {
    (await this.alertController.create({
      message: 'Torneio criado com sucesso!',
      buttons: ['OK']
    })).present();
    // let torneioDTO = new TorneioDTO()
    // torneioDTO.nomeTorneio = "Torneio de teste";
    // torneioDTO.dataInicio = new Date();
    // torneioDTO.lojaId = 1;
    // torneioDTO.rodadas = [];
    // torneioDTO.tierTorneio = 1;
    // torneioDTO.tipoJogo = 1;
    // torneioDTO.valorInscricao = 10;
    // this.torneioService.save(torneioDTO).subscribe(() => {
    //   this.alertController.create({
    //     message: 'Torneio criado com sucesso!',
    //     buttons: ['OK']
    //   });
    // })
  }

}
