import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
import { PedidoDTO } from '../model/pedido.dto';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PedidoService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/pedido`;

  getAllByParams(params: HttpParams) {
    return this.httpClient.get<PedidoDTO[]>(`${this.urlController}`, { params });
  }

}
