import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  private loadingElement: HTMLIonLoadingElement | null = null;
  private requestCount = 0;

  constructor(private loadingController: LoadingController) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestCount++;

    if (this.requestCount === 1) {
      return from(this.showLoading()).pipe(
        switchMap(() => next.handle(req).pipe(
          finalize(() => this.handleFinalize())
        ))
      );
    }

    return next.handle(req).pipe(
      finalize(() => this.handleFinalize())
    );
  }

  private async showLoading(): Promise<void> {
    if (!this.loadingElement) {
      this.loadingElement = await this.loadingController.create({
        message: 'Carregando...',
        spinner: 'crescent',
      });
      await this.loadingElement.present();
    }
  }

  private async hideLoading(): Promise<void> {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
      this.loadingElement = null;
    }
  }

  private handleFinalize(): void {
    this.requestCount--;

    if (this.requestCount === 0) {
      this.hideLoading();
    }
  }
}


export const HTTP_LOADER_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpLoadingInterceptor,
  multi: true
};
