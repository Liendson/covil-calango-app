import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { JogadorDTO } from '../model/jogador.dto';
import { KEY_USUARIO, StorageService } from '../services/storage.service';
import { UsuarioDTO } from '../model/usuario.dto';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.sendWithToken(request, next);
  }

  sendWithToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.getToken().pipe(
      mergeMap((jogador) => {
        const authedRequest = this.addToken(request, jogador?.comanda?.usuario);
        return next.handle(authedRequest);
      })
    );
  }

  getToken(): Observable<JogadorDTO> {
    return from([this.storageService.get(KEY_USUARIO) as JogadorDTO]);
  }

  addToken(request: HttpRequest<any>, usuario: UsuarioDTO): HttpRequest<any> {
    let clonedRequest = request.clone();
    if (usuario?.token) {
      clonedRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${usuario?.token}`,
        },
      });
    }
    return clonedRequest;
  }
}

export const HTTP_AUTH_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpAuthInterceptor,
  multi: true
};
