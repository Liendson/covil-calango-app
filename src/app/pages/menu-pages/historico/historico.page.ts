import { Component, Injector, OnInit } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/model/generic.class';
import { TorneioService } from 'src/app/services/torneio.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage extends GenericClass implements OnInit {

  public listHistoricoTorneios: any[] = [];

  constructor(
    public injector: Injector,
    private torneioService: TorneioService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.torneioService.getAll().subscribe((torneios: TorneioDTO[]) => {
      this.listHistoricoTorneios = torneios;
    });
  }

}
