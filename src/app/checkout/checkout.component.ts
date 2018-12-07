import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  books: any[];
  total: number = 0;
  success: boolean = true ;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentBooks.subscribe(books => this.books = books);
    this.calculTotal();

  }

  calculTotal(){
    this.books.forEach(book => {
      this.total+=book.prix;
    });
  }


}
