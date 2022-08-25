import { HttpClient } from '@angular/common/http';
import { Directive, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { AppComponent } from "../app.component";
import { GerenciadorService } from "../services/gerenciador.service";
import { JogadorService } from "../services/jogador.service";
import { LocalService } from "../services/local.service";
import { LojaService } from "../services/loja.service";
import { PartidaService } from "../services/partida.service";
import { RodadaService } from "../services/rodada.service";
import { TorneioService } from "../services/torneio.service";

@Directive()
export abstract class GenericClass {

  // Variáveis Globais
  public baseUrl = environment.url;
  public get usuario() { return AppComponent.usuario; }

  // Services
  public gerenciadorService: GerenciadorService;
  public jogadorService: JogadorService;
  public localService: LocalService;
  public lojaService: LojaService;
  public partidaService: PartidaService;
  public rodadaService: RodadaService;
  public torneioService: TorneioService;

  // Angular Commons
  public router: Router;
  public httpClient: HttpClient;

  // Ionic Commons
  public modalController: ModalController;
  public alertController: AlertController;

  constructor(public injector: Injector) {
    this.router = this.injector.get(Router);
    this.httpClient = this.injector.get(HttpClient);
    this.alertController = this.injector.get(AlertController);
    this.modalController = this.injector.get(ModalController);
    this.gerenciadorService = this.injector.get(GerenciadorService);
    this.jogadorService = this.injector.get(JogadorService);
    this.localService = this.injector.get(LocalService);
    this.lojaService = this.injector.get(LojaService);
    this.partidaService = this.injector.get(PartidaService);
    this.rodadaService = this.injector.get(RodadaService);
    this.torneioService = this.injector.get(TorneioService);
  }

  toRoute(url) {
    this.router.navigate([url])
  }

}