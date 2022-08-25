import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PartidaDTO } from '../model/partida.dto';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  private urlController = `${environment.url}/api/partida`;

  constructor(public httpClient: HttpClient) { }

  save(body: PartidaDTO) {
    return body.id
      ? this.httpClient.put(`${this.urlController}`, body)
      : this.httpClient.post(`${this.urlController}`, body);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.urlController}/${id}`);
  }

  getAll() {
    return this.httpClient.get(`${this.urlController}`);
  }

  getByJogadorId(id: number) {
    return this.httpClient.get(`${this.urlController}/jogador/${id}`);
  }

  getById(id: number) {
    return this.httpClient.get(`${this.urlController}/${id}`);
  }

}
