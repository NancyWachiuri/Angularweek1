import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
  
})
export class QuoteformComponent implements OnInit {

  newQuote = new Quotes (1,"","","",new Date());
  constructor() { }

  public name="";


  ngOnInit(): void {
  }

}
