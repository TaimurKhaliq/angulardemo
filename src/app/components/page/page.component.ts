import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../content.service';
import {Card} from '../../models/card.interface';

@Component({
  selector:    'app-page-component',
  templateUrl: './page.component.html',
})
export class PageComponent {
  data: Card[];
  constructor(private contentSvc: ContentService) {
    this.data = this.contentSvc.getCards();
  }
}
