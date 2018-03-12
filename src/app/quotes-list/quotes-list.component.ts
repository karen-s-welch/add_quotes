import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  title: string = 'Quotes List';
  @Input() all_quotes: Quote[];

  constructor() { }

  ngOnInit() {
  }

}
