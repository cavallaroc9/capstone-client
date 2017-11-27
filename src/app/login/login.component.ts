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
  }


  signIn() {
    this.auth.signIn(this.user.email, this.user.password)
    if(this.auth.user) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/';

              // Redirect the user
              this.router.navigate([redirect]);
    }

    }


}
