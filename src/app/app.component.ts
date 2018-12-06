import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books Store';
  routes = [
    { url: 'books', linkName: 'Books List'},
    { url: 'add', linkName: 'Add a Book'},
    { url: 'delete', linkName: 'Delete a Book'},
    { url: 'search', linkName: 'Search a Book'},
    { url: 'cart', linkName: 'Shopping Cart'},

  ]
}
