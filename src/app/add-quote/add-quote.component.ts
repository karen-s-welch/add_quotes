import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() eventToParent = new EventEmitter();
  title: string = 'Add a Quote';
  quote: Quote = new Quote();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log (this.quote);
    this.eventToParent.emit(this.quote);
    this.quote = new Quote();
  }
}
