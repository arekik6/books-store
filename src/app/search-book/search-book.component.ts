import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  books: any[];
  filteredBooks: any[];
  keyword: string;
  dispo: string = '';
  cartBooks: any[] = [];

  constructor(private booksService: BooksService, private cartService: CartService) { }

  ngOnInit() {
    this.booksService.getBooks()
    .subscribe((response: any[]) => {
      this.books = response;
    });
    this.cartService.currentBooks.subscribe(cartBooks => this.cartBooks = cartBooks);

  }

  filterBooks() {
    this.filteredBooks = [];
    this.books.forEach(book => {
    if (this.dispo !== '') {
      if (book.name.includes(this.keyword) && book.dispo.toString() == this.dispo) {
        this.filteredBooks.push(book);
      }
    } else {
      if (book.name.includes(this.keyword)) {
        this.filteredBooks.push(book);
      }
    }
    });
  }

  addBookToCart(book: any) {
    this.cartBooks.push(book);
    this.cartService.changeBooks(this.cartBooks);
  }
}
