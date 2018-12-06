import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';
import { CartService } from './cart.service';
import { CreateBookComponent } from './create-book/create-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DeleteBooksComponent } from './delete-books/delete-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowBooksComponent,
    CreateBookComponent,
    SearchBookComponent,
    CartComponent,
    DeleteBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BooksService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
