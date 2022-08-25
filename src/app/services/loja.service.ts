import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LojaDTO } from '../model/loja.dto';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private urlController = `${environment.url}/api/loja`;

  constructor(public httpClient: HttpClient) { }

  save(body: LojaDTO) {
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
