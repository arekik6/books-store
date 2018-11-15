import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBooksComponent } from '../show-books/show-books.component';
import { CreateBookComponent } from '../create-book/create-book.component';
import { SearchBookComponent } from '../search-book/search-book.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
    { path: '', component: ShowBooksComponent,},
    { path: 'books', component: ShowBooksComponent,},
    { path: 'add', component: CreateBookComponent,},
    { path: 'search', component: SearchBookComponent,},
    { path: 'cart', component: CartComponent,},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
