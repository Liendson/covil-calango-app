import { Component, Input } from '@angular/core';

@Component({
  selector: 'ygo-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  public title: string;

}
