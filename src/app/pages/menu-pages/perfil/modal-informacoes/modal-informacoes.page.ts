import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-informacoes',
  templateUrl: './modal-informacoes.page.html',
  styleUrls: ['./modal-informacoes.page.scss'],
})
export class ModalInformacoesPage {

  @Input()
  public content: string;

  @Input()
  public title: string;

}
