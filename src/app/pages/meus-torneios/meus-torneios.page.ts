import { Component, Injector } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/model/generic.class';
import { TorneioService } from 'src/app/services/torneio.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-meus-torneios',
  templateUrl: './meus-torneios.page.html',
  styleUrls: ['./meus-torneios.page.scss'],
})
export class MeusTorneiosPage extends GenericClass implements ViewWillEnter {

  public listMeusTorneios: TorneioDTO[] = [];

  constructor(
    public injector: Injector,
    private torneioService: TorneioService
  ) {
    super(injector);
  }

  ionViewWillEnter(): void {
    this.torneioService.getAll().subscribe((torneios: TorneioDTO[]) => {
      this.listMeusTorneios = torneios;
    });
  }

}
