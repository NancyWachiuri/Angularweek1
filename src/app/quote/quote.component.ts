import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
// quote:Quotes=new Quotes(1,"Dream big my people","Nancy","wanjugu",new Date(2020,7,12))
quote!:Quotes;
quotesr:Quotes[]=[new Quotes(1,"To improve is to change; to be perfect is to chang often","Winston Churchill","Nancy",new Date(2020,7,12)),
new Quotes(2,"Don't be afraid to give up the god to go for the great","John D. Rockefeller","Eric",new Date(2021,7,12)),
new  Quotes(3,"A wise man changes his mind but a fool never will","Icelandic Proverb","wanjugu",new Date(2020,8,12))]


goaldelete(isComplete: any,index: any){
  if(isComplete){
    this.quotesr.splice(index,1)
  }

}






  constructor() { }

  ngOnInit(): void {
  }

}
