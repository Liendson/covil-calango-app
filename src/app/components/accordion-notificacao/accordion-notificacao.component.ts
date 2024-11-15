import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ygo-accordion-notificacao',
  templateUrl: './accordion-notificacao.component.html',
  styleUrls: ['./accordion-notificacao.component.scss'],
})
export class AccordionNotificacaoComponent {

  @Input()
  public notificacao: any;

}
