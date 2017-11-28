import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // New user object. Used to fix template binding
    newUser = <any>{};
    // User object. Used to fix template binding
    user = <any>{};
    // Not bound to multiple inputs, no object needed
    oldPassword: string
    newPassword: string


  constructor(
    public auth: AuthService,
    public router: Router
  ) {
}

  ngOnInit() {
    console.log('on init', this.auth.redirectUrl)
    if (this.auth.user) {
    this.router.navigate(["/places/"]);
  }
  }


  signIn() {
    console.log('redirect url', this.auth.redirectUrl)
    this.auth.signIn(this.user.email, this.user.password)
    // if(this.auth.user) {
    //   // Get the redirect URL from our auth service
    //   // If no redirect has been set, use the default
    //   let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/';
    //     console.log('redirect is', redirect)
    //           // Redirect the user
    //           this.router.navigate([redirect]);
    }

    }
