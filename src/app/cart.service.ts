import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {

  private booksSource = new BehaviorSubject([]);
  currentBooks = this.booksSource.asObservable();

  constructor() { }

  changeBooks(books: any[]) {
    this.booksSource.next(books);
  }

}
