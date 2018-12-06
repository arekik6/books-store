import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent implements OnInit {

  books: any[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks()
    .subscribe((response: any[]) => {
      this.books = response;
    });

  }

  deleteBook(book: any) {
      this.booksService.deleteBook(book).subscribe(() => { });
  }

}

