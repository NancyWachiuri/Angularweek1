import { Component,  } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  numberOfLikes!: number;
  

  likeButtonClick(){
    this.numberOfLikes++;
  }

  dislikeButtonClick(){
    this.numberOfLikes--;
  }
}

 //constructor(); { }

 // ngOnInit(); void {
  //}



