import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { Store } from "@ngxs/store";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private route: Router,
    private store: Store
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.store.reset({ auth: { token: null} })
    return this.route.navigate(['/login'])
  }

}
