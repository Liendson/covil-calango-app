import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JogadorDTO } from '../model/jogador.dto';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private urlController = `${environment.url}/api/jogador`;

  constructor(public httpClient: HttpClient) { }

  save(body: JogadorDTO) {
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

  getById(id: number) {
    return this.httpClient.get(`${this.urlController}/${id}`);
  }

}
