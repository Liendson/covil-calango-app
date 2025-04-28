import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericClass } from 'src/app/model/generic.class';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { ComandaService } from 'src/app/services/comanda.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ComandaDTO } from 'src/app/model/comanda.dto';
import { SolicitacaoDTO } from 'src/app/model/solicitacao.dto';
import { LoadingController } from '@ionic/angular';
import { fromStatusSolicitacaoEnumValue, StatusSolicitacaoEnum } from 'src/app/enums/status-solicitacao.enum';

@Component({
  selector: 'app-modal-informar-nome',
  templateUrl: './modal-informar-nome.page.html',
  styleUrls: ['./modal-informar-nome.page.scss'],
})
export class ModalInformarNomePage extends GenericClass implements OnInit {

  public form: FormGroup;
  public usuario: JogadorDTO;
  private loading: HTMLIonLoadingElement | null = null;

  constructor(
    public injector: Injector,
    private formBuilder: FormBuilder,
    private websocketService: WebsocketService,
    private storageService: StorageService,
    private comandaService: ComandaService,
    private loadingController: LoadingController
  ) {
    super(injector);
    this.createWebSocketConnection();
  }

  get nome() {
    return this.form.get('nome').value;
  }

  ngOnInit(): void {
    this.configurarForm();
  }

  configurarForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  createWebSocketConnection() {
    this.websocketService.createWebSocketConnection().subscribe(id => {
      this.websocketService.getClient().subscribe(`/topic/comanda/${id}`, m => {
        const solicitacao: SolicitacaoDTO = WebsocketService.formatResponse(m.body);
        this.hideLoading();
        if (solicitacao.status === fromStatusSolicitacaoEnumValue(StatusSolicitacaoEnum.ACEITA)) {
          this.setarDadosResponse(solicitacao.comanda);
        }
      });
    });
  }


  setarDadosResponse(res: ComandaDTO) {
    const jogadorDTO: JogadorDTO = new JogadorDTO(1, null, null, res.usuario, res);
    this.storageService.set(KEY_USUARIO, jogadorDTO);
    this.router.navigate(['/home']);
  }

  gerarNumeroComanda() {
    this.websocketService.send('/app/solicitacao/solicitar', this.nome);
    this.modalController.dismiss();
    this.showLoading();
  }

  private async showLoading(): Promise<void> {
    if (!this.loading) {
      this.loading = await this.loadingController.create({
        message: 'Aguardando aprovação...',
        spinner: 'crescent',
      });
      await this.loading.present();
    }
  }

  private async hideLoading(): Promise<void> {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }

}
