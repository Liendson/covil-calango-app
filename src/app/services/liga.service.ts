import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';
import { DadosLigaDTO } from '../model/dados-liga.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LigaService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/liga`;

  getLigaVigente(): Observable<DadosLigaDTO> {
    return this.httpClient.get<DadosLigaDTO>(`${this.urlController}/vigente`);
  }

}
