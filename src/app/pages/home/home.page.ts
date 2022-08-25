import { Component, OnInit } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/utils/generic.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends GenericClass implements OnInit {

  public listProximosTorneios: TorneioDTO[] = [];

  ngOnInit(): void {
    this.torneioService.getAll().subscribe((torneios: TorneioDTO[]) => {
      this.listProximosTorneios = torneios;
    })
  }

}
