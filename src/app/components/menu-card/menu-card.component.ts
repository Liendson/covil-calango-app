import { Component, Input } from '@angular/core';

@Component({
  selector: 'ygo-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent {

  @Input()
  public content: any;

  @Input()
  public icon: string;

  @Input()
  public label: string;

  @Input()
  public color: string = "blue";

  @Input()
  public margin: any;

}
