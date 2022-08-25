import { Component } from '@angular/core';
import { JogadorDTO } from './model/jogador.dto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() { }

  public static usuario: JogadorDTO = {
    id: 1,
    nome: 'Liendson',
    pontos: 10240,
    tcgId: '1',
    tipoJogo: 1,
  }

}
