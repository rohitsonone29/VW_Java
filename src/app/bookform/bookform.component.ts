import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  book:Book;
  constructor() {
    this.book=new Book(-1,'','');
   }

  ngOnInit(): void {
  }

  submitform(form:any)
  {
    console.log(this.book);
  }

}
