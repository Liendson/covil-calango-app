import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RodadaDTO } from '../model/rodada.dto';

@Injectable({
  providedIn: 'root'
})
export class RodadaService {

  private urlController = `${environment.url}/api/rodada`;

  constructor(public httpClient: HttpClient) { }

  save(body: RodadaDTO) {
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

  getByTorneioId(id: number) {
    return this.httpClient.get(`${this.urlController}/torneio/${id}`);
  }

  getById(id: number) {
    return this.httpClient.get(`${this.urlController}/${id}`);
  }

}
