import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
@Input() quotess!:Quotes
@Output () isComplete=new EventEmitter<boolean>()

deleteQuote(complete:boolean){
  this.isComplete.emit(complete)
}

//upVote(complete:boolean){
//this.isComplete.emit(return)
//{

//downVote(complete:boolean){
//this.isComplete.emit(return)
 // {

  constructor() { }

  ngOnInit(): void {
  }

}
