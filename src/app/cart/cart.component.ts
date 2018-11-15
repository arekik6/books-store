import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: any[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentBooks.subscribe(books => this.books = books);
  }

  removeBookFromCart(book) {
    this.books = this.books.filter(obj => obj !== book);
    this.cartService.changeBooks(this.books);
  }
}
