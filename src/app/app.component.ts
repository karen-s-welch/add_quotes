import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes: Quote [] = [
    {quote: 'I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.', author: 'Ada Lovelace'},
    {quote: 'To be, or not to be.', author: 'Prince Hamlet'},
    {quote: 'There are risks and costs to action. But they are far less than the long-range risks of comfortable inaction.', author: 'John F. Kennedy'},
  ];

    addToQuoteList(quote) {
      console.log("This quote is:", quote);
      this.quotes.push(quote);
    }

}
