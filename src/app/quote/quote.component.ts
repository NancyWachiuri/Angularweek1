import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  styles: ['body {box-sizing: border-box}, {margin: 0}{padding: 0},{font-family: Arial, Helvetica, sans-serif},{line-height: 1.4}'],
})
export class QuoteComponent implements OnInit {


// quote:Quotes=new Quotes(1,"Dream big my people","Nancy","wanjugu",new Date(2020,7,12))

quotesr:Quotes[]=[new Quotes(1,"To improve is to change; to be perfect is to chang often","Winston Churchill","Nancy",new Date(2020,7,12)),
new Quotes(2,"Don't be afraid to give up the good to go for the great","John D. Rockefeller","Eric",new Date(2021,7,12)),
new  Quotes(3,"A wise man changes his mind but a fool never will change","Icelandic Proverb","wanjugu",new Date(2020,8,12))]


quotedelete(isComplete: any,index: any){
  if(isComplete){
    this.quotesr.splice(index,1)
  }

}

addNewQuote(quotes:Quotes){
  let quoteLength = this.quotesr.length;
  quotes.id = quoteLength+1;
  quotes.dateadded = new Date(quotes.dateadded)
  this.quotesr.push(quotes)
  console.log (quotes)
}
  

  constructor (){}

  ngOnInit(): void {
  }
}


