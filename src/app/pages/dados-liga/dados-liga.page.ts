import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { DadosLigaDTO } from 'src/app/model/dados-liga.dto';
import { JogadorLigaDTO } from 'src/app/model/jogador-liga.dto';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-dados-liga',
  templateUrl: './dados-liga.page.html',
  styleUrls: ['./dados-liga.page.scss'],
})
export class DadosLigaPage implements ViewWillEnter {

  public dadosDaLiga: DadosLigaDTO;

  constructor(private ligaService: LigaService) { }

  ionViewWillEnter() {
    this.ligaService.getLigaVigente().subscribe((dadosDaLiga: DadosLigaDTO) => {
      this.dadosDaLiga = dadosDaLiga;
    });
  }

  estaNoTop(jogador: JogadorLigaDTO) {
    return [1, 2, 3].includes(jogador.posicao);
  }

  getClassePorPosicao(jogador: JogadorLigaDTO) {
    switch(jogador.posicao) {
      case 1:
        return 'primeiro-lugar';
      case 2:
        return 'segundo-lugar';
      case 3:
        return 'terceiro-lugar';
    }
  }

}
