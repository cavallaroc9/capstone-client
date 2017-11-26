import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  apiOrigin = environment.apiOrigin;

constructor(private router : Router) { }

  ngOnInit() {
    this.router.navigate(["/login/"]);
  }
}
