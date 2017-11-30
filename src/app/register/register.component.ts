import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // New user object. Used to fix template binding
    newUser = <any>{};

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  signUp(){
    this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation)
    this.newUser.email = '';
    this.newUser.password = '';
    this.newUser.password_confirmation  = '';
    }

}
