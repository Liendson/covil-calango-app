import { Component, Injector } from '@angular/core';
import { ProdutoDTO } from 'src/app/model/produtos.dto';
import { GenericClass } from 'src/app/model/generic.class';
import { ModalConfirmarPedidoPage } from './modal-confirmar-pedido/modal-confirmar-pedido.page';
import { ProdutoService } from 'src/app/services/produto.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage extends GenericClass implements ViewWillEnter {

  public listaDeProdutos: ProdutoDTO[] = [];
  public listaDeProdutosFiltrada: ProdutoDTO[] = [];

  constructor(
    public injector: Injector,
    private produtoService: ProdutoService
  ) {
    super(injector);
  }

  ionViewWillEnter(): void {
    this.produtoService.getAll().subscribe((listaDeProdutos: ProdutoDTO[]) => {
      this.listaDeProdutos = listaDeProdutos;
      this.listaDeProdutosFiltrada = [...this.listaDeProdutos];
    });
  }

  async openModalConfirmarPedido(produto: ProdutoDTO) {
    (await this.modalController.create({
      component: ModalConfirmarPedidoPage,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
      componentProps: { produto }
    })).present();
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.listaDeProdutosFiltrada = this.listaDeProdutos.filter((d) =>
      (d.nome.toLowerCase().indexOf(query) > -1) || (d.ingredientes.toLowerCase().indexOf(query) > -1));
  }

  realizarPedido(produto: ProdutoDTO) {
    this.openModalConfirmarPedido(produto);
  }

}

