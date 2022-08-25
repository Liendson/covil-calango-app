import { Component, OnInit } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/utils/generic.class';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage extends GenericClass implements OnInit {

  public listHistoricoTorneios: any[] = [];

  ngOnInit(): void {
    this.torneioService.getAll().subscribe((torneios: TorneioDTO[]) => {
      this.listHistoricoTorneios = torneios;
    })
  }

}
