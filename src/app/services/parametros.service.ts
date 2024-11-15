import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParametrosService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/parametros`;

  getByName(nome: string): Observable<any> {
    return this.httpClient.get<any>(`${this.urlController}/${nome}`);
  }

}
