import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'Books Store';
  routes = [
    { url: 'books', linkName: 'Books List'},
    { url: 'cart', linkName: 'Shopping Cart'},

  ];


  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
  toTop() {
    document.getElementById('contentx').scrollIntoView();
  }
}
