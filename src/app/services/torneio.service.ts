import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TorneioDTO } from '../model/torneio.dto';

@Injectable({
  providedIn: 'root'
})
export class TorneioService {

  private urlController = `${environment.url}/api/torneio`;

  constructor(public httpClient: HttpClient) { }

  save(body: TorneioDTO) {
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

  realizarInscricao() {
    // return this.httpClient.post(`${this.urlController}/inscrever`, body);
  }

}
