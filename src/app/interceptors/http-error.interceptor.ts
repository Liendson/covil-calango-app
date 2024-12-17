import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private alertController: AlertController) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(() => error);
      })
    );
  }

  private async handleError(error: any): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alguma coisa deu errado! 🤔',
      message: this.getErrorMessage(error),
      buttons: ['Ok'],
    });
    await alert.present();
  }

  private getErrorMessage = (error: any) => {
    switch(error.status) {
      case 0:
        return 'Não foi possível conectar ao servidor. Verifique sua conexão com a internet!';
      case 403:
        return 'Tem certeza que você tem permissão?';
      case 404:
        return 'Recurso não encontrado!';
      case 500:
        return 'Erro interno do servidor!';
      default:
        return error?.error?.message;
    }
  };
}

export const HTTP_ERROR_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true
};
