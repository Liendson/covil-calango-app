import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ygo-accordion-historico',
  templateUrl: './accordion-historico.component.html',
  styleUrls: ['./accordion-historico.component.scss'],
})
export class AccordionHistoricoComponent {

  @Input()
  public historico: any;

}
