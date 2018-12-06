import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'Books Store';
  routes = [
    { url: 'books', linkName: 'Books List'},
    { url: 'add', linkName: 'Add a Book'},
    { url: 'delete', linkName: 'Delete a Book'},
    { url: 'search', linkName: 'Search a Book'},
    { url: 'cart', linkName: 'Shopping Cart'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
