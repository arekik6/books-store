import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BooksService {
  rep: any;
  handleError: any;
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('http://localhost:3000/books');
  }

  addBook(book) {
    return  this.http.post('http://localhost:3000/books',book);
  }

  deleteBook(book) {
    return  this.http.delete('http://localhost:3000/books/'+book.id);
  }

}
