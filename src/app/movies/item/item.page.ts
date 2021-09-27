import { Component, Input, OnInit } from '@angular/core';
import { ImdbMovie } from '../miscellanous/interface';

// interface movie {
//   title: string;
//   year: number;
// }

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})

export class ItemPage implements OnInit {
  @Input()
  movie: ImdbMovie;

  constructor() { }

  ngOnInit() {
  }

}
