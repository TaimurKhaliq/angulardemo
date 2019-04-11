import {Component, Input, OnInit} from '@angular/core';
import {MenuInterface} from '../../models/menu.interface';

@Component({
  selector:    'app-menu-item-component',
  templateUrl: './menu.item.component.html',
})
export class MenuItemComponent implements OnInit {
  @Input()
  data: MenuInterface;
  constructor() {
  }
  ngOnInit(): void {
  }
}
