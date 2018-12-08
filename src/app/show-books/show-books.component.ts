import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  books: any[];
  cartBooks: any[] = [];
  term: string;

  constructor(private booksService: BooksService, private cartService: CartService) { }

  ngOnInit() {
    this.booksService.getBooks()
    .subscribe((response: any[]) => {
      this.books = response;
    });

    this.cartService.currentBooks.subscribe(cartBooks => this.cartBooks = cartBooks);

  }

  addBookToCart(book: any) {
    this.cartBooks.push(book);
  }

}
