import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

const TOPIC_SESSION = '/topic/session/*';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public stompClient: CompatClient;
  public simpSessionId: string;

  static formatResponse(body: string) {
    return JSON.parse(body);
  }

  /**
   * Cria uma conexão ao WebSocket (covil-ws):
   *
   * @returns Retorna um Observable<string>, onde essa string é um simpSessionId, utilizada caso necessária.
   */
  createWebSocketConnection(): Observable<string> {
    return new Observable<string>((observer) => {
      const socket = new SockJS(`${environment.url}/covil-ws`);
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, () => {
        this.stompClient.subscribe(TOPIC_SESSION, message => {
          this.simpSessionId = message.body;
          observer.next(this.simpSessionId);
          observer.complete();
        });
      });
    }).pipe(take(1));
  }

  /**
   * Obtém o stompClient da última conexão, necessária para se realizar o subscribe() nos topics.
   *
   * @returns CompatClient, use com subscribe para escutar retornos da api do websocket.
   */
  getClient(): CompatClient {
    return this.stompClient;
  }

  /**
   * Envia dados para o MessageMapping da API.
   *
   * @param path path da API.
   * @param content conteudo do body.
   */
  send(path: string, content: any) {
    this.stompClient.send(path, {}, JSON.stringify(content));
  }

}
