import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: any[];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentBooks.subscribe(books => this.books = books);
    this.calculTotal();

  }

  removeBookFromCart(book) {
    this.books = this.books.filter(obj => obj !== book);
    this.cartService.changeBooks(this.books);
  }

  calculTotal(){
    this.books.forEach(book => {
      this.total+=book.prix;
    });
  }

}
