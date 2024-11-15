import { Component, Input } from '@angular/core';
import { GenericClass } from 'src/app/model/generic.class';

@Component({
  selector: 'app-ygo-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent extends GenericClass {

  @Input()
  public content: any;

  @Input()
  public icon: string;

  @Input()
  public label: string;

  @Input()
  public color = 'blue';

  @Input()
  public margin: any;

}
