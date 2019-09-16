import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { AuthenticationService } from "../../../pages/authentication/authentication.service";

import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private cookie: CookieService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    return this.authService.logout()
      .subscribe(
        () => {
          this.cookie.delete('token')
          this.route.navigate(['login'])
        }
      )
  }

}
