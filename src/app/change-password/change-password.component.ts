import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword: string
  newPassword: string


  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  changePassword() {
    this.auth.changePassword(this.oldPassword, this.newPassword);
    this.oldPassword = '';
    this.newPassword = '';
  }

  cancelChange() {
    this.router.navigate(["/places"]);
  }


}
