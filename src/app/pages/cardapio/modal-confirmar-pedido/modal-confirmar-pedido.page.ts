import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, ViewWillEnter } from '@ionic/angular';
import { PedidoDTO } from 'src/app/model/pedido.dto';
import { ProdutoDTO } from 'src/app/model/produtos.dto';
import { PedidoService } from 'src/app/services/pedido.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal-confirmar-pedido',
  templateUrl: './modal-confirmar-pedido.page.html',
  styleUrls: ['./modal-confirmar-pedido.page.scss'],
})
export class ModalConfirmarPedidoPage implements ViewWillEnter {

  @Input()
  public produto: ProdutoDTO;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalController: ModalController,
    private pedidoService: PedidoService,
    private storageService: StorageService
  ) { }

  get quantidade() {
    return this.form?.get('quantidade');
  }

  ionViewWillEnter() {
    this.configurarForm();
  }

  configurarForm() {
    this.form = this.formBuilder.group({
      quantidade: [1, Validators.required],
      observacao: [null],
      produto: [this.produto, Validators.required],
      comanda: [this.storageService.getNumeroDaComanda(), Validators.required]
    });
  }

  async confirmarPedido() {
    const pedido = new PedidoDTO(this.form.value);
    this.pedidoService.save(pedido).subscribe(async r => (await this.alertController.create({
      message: `Pedido realizado com sucesso! Acompanhe-o na aba de 'Meus Pedidos'`,
      buttons: ['OK']
    })).present().then(() => this.modalController.dismiss()));
  }

  addProduto() {
    let quantidadeAtual = this.quantidade.value;
    this.quantidade.setValue(++quantidadeAtual);
  }

  removerProduto() {
    let quantidadeAtual = this.quantidade.value;
    if (quantidadeAtual > 1) {
      this.quantidade.setValue(--quantidadeAtual);
    }
  }

}
