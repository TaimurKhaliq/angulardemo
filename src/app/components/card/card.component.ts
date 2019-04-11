import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card.interface';

@Component({
  selector:    'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  data: Card;
  @Input()
  index: number; // used to switch view size
  ngOnInit(): void {
  }
}


