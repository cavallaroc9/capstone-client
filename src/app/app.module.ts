import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ModalModule} from "ngx-modal";
import { RatingModule } from 'ngx-bootstrap/rating';

import { HttpModule } from '@angular/http';


import { Router } from '@angular/router';

import { PlaceRoutingModule } from './places/place-routing.module';
import { PlacesModule } from './places/places.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordRoutingModule } from './change-password/change-password-routing.module';

import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register/register-routing.module'

import { AgmCoreModule } from '@agm/core';

// import alert service and component
import { AlertComponent } from './_directives/index';
import { AlertService } from './services/index';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    RatingModule.forRoot(),
    LoginRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    PlacesModule,
    PlaceRoutingModule,
    RegisterRoutingModule,
    ChangePasswordRoutingModule,
    FilterPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDO_u2FHozo4P8o-V7YtHs9vcOhEnf79is',
      libraries: ['places']
    })
  ],
  providers: [AuthService, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
