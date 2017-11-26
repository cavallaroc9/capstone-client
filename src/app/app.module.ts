import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';


import { Router } from '@angular/router';

import { ExamplesRoutingModule } from './examples/example-routing.module';
import { ExamplesModule } from './examples/examples.module';
import { PlaceRoutingModule } from './places/place-routing.module';
import { PlacesModule } from './places/places.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register/register-routing.module'

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ExamplesModule,
    ExamplesRoutingModule,
    PlacesModule,
    PlaceRoutingModule,
    RegisterRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
