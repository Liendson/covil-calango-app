import { Component, OnInit } from '@angular/core';
import { RankingEnum } from 'src/app/utils/enums/ranking.enum';
import { GenericClass } from 'src/app/utils/generic.class';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends GenericClass implements OnInit {

  ngOnInit(): void {

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
      case pontos == 0:
        return RankingEnum.UNRANKED;
    }
  }

  // a definir
  // top 4 = SEMANAL {
  //   1: 100
  //   2: 75
  //   3: 50
  //   4: 40
  //   outros = +10
  //   penultimo - 10 (se for prata +)
  //   ultimo - 20 (se for prata +)
  // }

  // top 4 = MUNICIPAL | SNEAKPEAK {
  //   1: 500
  //   2: 300
  //   3: 200
  //   4: 100
  //   outros = +50
  //   penultimo - 20 (se for prata +)
  //   ultimo - 30 (se for prata +)
  // }

  // top 4 = REGIONAL {
  //   1: 5000
  //   2: 3000
  //   3: 2000
  //   4: 1000
  //   outros = +50
  //   penultimo - 20 (se for prata +)
  //   ultimo - 30 (se for prata +)
  // }

}
