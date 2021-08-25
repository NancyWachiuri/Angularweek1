import { Quote } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
  
})
export class QuoteformComponent implements OnInit {

  newQuote = new Quotes (0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  quoteData!: NgForm

  submitQuote(data:{authour:string, sentence:string, submittedby:string, dateadded:Date}){
    

this.newQuote.authour=data.authour
this.newQuote.sentence=data.sentence
this.newQuote.submittedby=data.submittedby
this.newQuote.dateadded=data.dateadded


this.addQuote.emit(this.newQuote);

  }

  constructor() { }

  public name="";


  ngOnInit(): void {
  }

}
