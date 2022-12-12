import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book';
import { BookdaoService } from '../bookdao.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookarr:Book[];
  bookdao:BookdaoService;

  constructor(bookdao:BookdaoService) {
    this.bookarr=[];
    this.bookdao=bookdao;
  }

  ngOnInit(): void {
    this.bookarr=this.bookdao.getAllBooks();
  }

}
