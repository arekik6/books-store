import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBooksComponent } from '../show-books/show-books.component';
import { CreateBookComponent } from '../create-book/create-book.component';
import { SearchBookComponent } from '../search-book/search-book.component';
import { CartComponent } from '../cart/cart.component';
import { DeleteBooksComponent } from '../delete-books/delete-books.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardService } from '../auth-guard.service';

const routes: Routes = [
    { path: '', component: ShowBooksComponent,},
    { path: 'books', component: ShowBooksComponent,},
    { path: 'login', component: LoginComponent,},
    { path: 'search', component: SearchBookComponent,},
    { path: 'cart', component: CartComponent,},

    { path: 'add', component: CreateBookComponent, canActivate: [ AuthGuardService ], },
    { path: 'delete', component: DeleteBooksComponent, canActivate: [ AuthGuardService ], },


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
