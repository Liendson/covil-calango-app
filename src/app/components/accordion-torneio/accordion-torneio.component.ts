import { Component, Input } from '@angular/core';

@Component({
  selector: 'ygo-accordion-torneio',
  templateUrl: './accordion-torneio.component.html',
  styleUrls: ['./accordion-torneio.component.scss'],
})
export class AccordionTorneioComponent {

  @Input()
  public torneio: any;

}
