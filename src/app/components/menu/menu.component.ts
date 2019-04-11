import {Component, Input, OnInit} from '@angular/core';
import {MenuInterface} from '../../models/menu.interface';
import {ContentService} from '../../content.service';

@Component({
  selector:    'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  data: MenuInterface[];
  constructor(private appCntSvc: ContentService) {
    this.data = this.appCntSvc.getMenu();
  }
  ngOnInit(): void {
  }
}
