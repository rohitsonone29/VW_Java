import { Injectable } from '@angular/core';
import { Book } from 'src/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

  bookarr:Book[]
  constructor() {
    this.bookarr = [];
   }

   addBook(b:Book):void
   {
      this.bookarr.push(b);
   }

   getAllBooks():Book[]
   {
      return  this.bookarr;
   }

}
