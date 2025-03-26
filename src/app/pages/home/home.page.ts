import { Component, Injector, OnInit } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';
import { GenericClass } from 'src/app/model/generic.class';
import { TorneioService } from 'src/app/services/torneio.service';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { JogadorDTO } from 'src/app/model/jogador.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends GenericClass implements OnInit {

  public listProximosTorneios: TorneioDTO[] = [];
  public usuario: JogadorDTO;

  constructor(
    public injector: Injector,
    private torneioService: TorneioService,
    private storageService: StorageService
  ) {
    super(injector);
  }

  isVisitante() {
    return this.usuario.id === 1;
  }

  ngOnInit(): void {
    this.torneioService.getAll().subscribe((torneios: TorneioDTO[]) => {
      this.listProximosTorneios = torneios;
    });
    this.usuario = this.storageService.get(KEY_USUARIO) as JogadorDTO;
  }

}
