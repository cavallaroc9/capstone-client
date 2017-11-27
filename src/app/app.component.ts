import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  apiOrigin = environment.apiOrigin;

constructor(
  public auth: AuthService,
  private router : Router
) { }

  ngOnInit() {
    this.router.navigate(["/login/"]);
  }

  signOut() {
    this.auth.signOut();
  }

}
