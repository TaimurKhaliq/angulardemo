import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card.interface';

@Component({
  selector:    'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  data: Card;
  ngOnInit(): void {
  }
}


