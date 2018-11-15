import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  private book: any;
  bookName: string ;
  bookAuteur: string;
  bookPrix: number;
  bookImg: string;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  addBook() {

    if (this.bookName && this.bookAuteur && this.bookImg && !isNaN(this.bookPrix) ) {
      this.book  = {
        name: this.bookName,
        auteur: this.bookAuteur,
        prix: this.bookPrix,
        dispo:  true,
        img: this.bookImg,
      };

      this.booksService.addBook(this.book).subscribe(() => { });
    }
  }
}
