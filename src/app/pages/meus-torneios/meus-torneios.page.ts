import { Component, OnInit } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/utils/generic.class';

@Component({
  selector: 'app-meus-torneios',
  templateUrl: './meus-torneios.page.html',
  styleUrls: ['./meus-torneios.page.scss'],
})
export class MeusTorneiosPage extends GenericClass implements OnInit {

  public listMeusTorneios: TorneioDTO[] = [];

  ngOnInit(): void {
    this.torneioService.getAll().subscribe((torneios: TorneioDTO[]) => {
      this.listMeusTorneios = torneios;
    })
  }

  removerInscricaoTorneio() {

  }

}
