import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // User object. Used to fix template binding
    user = <any>{};

  constructor(
    public auth: AuthService,
    public router: Router
  ) {
}

  ngOnInit() {
    if (this.auth.user) {
    this.router.navigate(["/places/"]);
  }
  }


  signIn() {
    this.auth.signIn(this.user.email, this.user.password)
    this.user.email = '';
    this.user.password = '';
    }

    }
