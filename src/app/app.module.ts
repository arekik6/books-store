import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';



import { BooksService } from './books.service';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

import { AppComponent } from './app.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { CartComponent } from './cart/cart.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutFailComponent } from './checkout-fail/checkout-fail.component';


export const firebaseConfig = {
  apiKey: "AIzaSyA2SI3bxa-bumXCHukLchhCZCwQ-Afb6a0",
  authDomain: "books-5e3fe.firebaseapp.com",
  databaseURL: "https://books-5e3fe.firebaseio.com",
  projectId: "books-5e3fe",
  storageBucket: "books-5e3fe.appspot.com",
  messagingSenderId: "463353468274"
};


@NgModule({
  declarations: [
    AppComponent,
    ShowBooksComponent,
    CreateBookComponent,
    SearchBookComponent,
    CartComponent,
    DeleteBooksComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    FooterComponent,
    LoginComponent,
    CheckoutComponent,
    CheckoutSuccessComponent,
    CheckoutFailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [
    BooksService,
    CartService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
