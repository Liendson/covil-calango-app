import { Component, Injector } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { PedidoDTO } from 'src/app/model/pedido.dto';
import { GenericClass } from 'src/app/model/generic.class';
import { fromStatusPedidoEnumValue, StatusPedidoEnum } from 'src/app/enums/status-pedido.enum';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})
export class MeusPedidosPage extends GenericClass implements ViewWillEnter {

  public listaMeusPedidos: PedidoDTO[] = [];

  constructor(
    public injector: Injector,
    private pedidosService: PedidoService
  ) {
    super(injector);
  }

  get isPedidoEmAndamento() {
    return (p: PedidoDTO) => p.status === StatusPedidoEnum.EM_ANDAMENTO;
  }

  get isPedidoPronto() {
    return (p: PedidoDTO) => p.status === StatusPedidoEnum.PRONTO;
  }

  get isPedidoCancelado() {
    return (p: PedidoDTO) => p.status === StatusPedidoEnum.CANCELADO;
  }

  get isPedidoFinalizado() {
    return (p: PedidoDTO) => p.status === StatusPedidoEnum.FINALIZADO;
  }

  ionViewWillEnter(): void {
    this.pedidosService.getAll().subscribe(res => {
      this.listaMeusPedidos = res;
      this.ordenarPedidosPorPrioridade();
    });
  }

  ordenarPedidosPorPrioridade() {
    const statusPrioridade = {
      [StatusPedidoEnum.PRONTO]: 1,
      [StatusPedidoEnum.EM_ANDAMENTO]: 2,
      [StatusPedidoEnum.CANCELADO]: 3,
      [StatusPedidoEnum.FINALIZADO]: 4
    };
    this.listaMeusPedidos.sort((a, b) => statusPrioridade[a.status] - statusPrioridade[b.status]);
  }

  calcularPrazoDoPedido(pedido: PedidoDTO): Date {
    const prazoEmMinutos = pedido.produto.prazo;
    const dataHoraDoPedido = new Date(pedido.dataHora);
    dataHoraDoPedido.setMinutes(dataHoraDoPedido.getMinutes() + prazoEmMinutos);
    return dataHoraDoPedido;
  }

  getLabelPorStatusDoPedido(pedido: PedidoDTO) {
    return fromStatusPedidoEnumValue(pedido.status);
  }

  getClassePorStatusDoPedido(pedido: PedidoDTO) {
    switch(pedido.status) {
      case StatusPedidoEnum.FINALIZADO:
        return 'finalizado';
      case StatusPedidoEnum.EM_ANDAMENTO:
        return 'em-andamento';
      case StatusPedidoEnum.PRONTO:
        return 'pronto';
      case StatusPedidoEnum.CANCELADO:
        return 'cancelado';
    }
  }

}
