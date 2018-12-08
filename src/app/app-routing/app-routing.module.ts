import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBooksComponent } from '../show-books/show-books.component';
import { CreateBookComponent } from '../create-book/create-book.component';
import { CartComponent } from '../cart/cart.component';
import { DeleteBooksComponent } from '../delete-books/delete-books.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardService } from '../auth-guard.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CheckoutSuccessComponent } from '../checkout-success/checkout-success.component';
import { CheckoutFailComponent } from '../checkout-fail/checkout-fail.component';

const routes: Routes = [
    { path: '', component: ShowBooksComponent,},
    { path: 'books', component: ShowBooksComponent,},
    { path: 'login', component: LoginComponent,},
    { path: 'cart', component: CartComponent,},

    { path: 'checkout', component: CheckoutComponent, canActivate: [ AuthGuardService ], },
    { path: 'checkout/success', component: CheckoutSuccessComponent, canActivate: [ AuthGuardService ], },
    { path: 'checkout/fail', component: CheckoutFailComponent, canActivate: [ AuthGuardService ], },

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
