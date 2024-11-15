import { Component, Input } from '@angular/core';
import { TorneioDTO } from 'src/app/model/torneio.dto';

@Component({
  selector: 'app-ygo-accordion-torneio',
  templateUrl: './accordion-torneio.component.html',
  styleUrls: ['./accordion-torneio.component.scss'],
})
export class AccordionTorneioComponent {

  @Input()
  public torneio: TorneioDTO;

}
