import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { AuthenticationService } from "../../../pages/authentication/authentication.service";

import { CookieService } from "ngx-cookie-service";

import { Store } from "@ngxs/store";
import { RemoveToken, GetToken } from 'src/app/pages/authentication/auth.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private cookie: CookieService,
    private store: Store
  ) {
  }

  ngOnInit() {
  }

  logout() {
    return this.authService.logout()
      .subscribe(
        () => {
          this.cookie.delete('token')
          this.store.dispatch(new RemoveToken())
          this.store.dispatch(new GetToken())
            .subscribe(
              data => {
                console.log("test")
                console.log(data)
              }
            )
          this.route.navigate(['login'])
        }
      )
  }

}
