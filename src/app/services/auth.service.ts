import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { AlertService } from '../services/index';

@Injectable()
export class AuthService {
  user: any;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    private http: Http,
    private router : Router,
    private alertService: AlertService
  ) { }

getUserToken() {
  return this.user.token;
}

signIn(email: string, password: string) {
   // Create the credentials object.
   let credentials = {
     'credentials': {
       'email': email,
       'password': password
     }
   };

   let successMessage: string = email + ' is successfully signed in!';

   let errEmailMessage: string = 'Email is a required field.';

   let errPasswordMessage: string = 'Password is a required field.';

   let errUnAuthMessage: string = 'Invalid email and/or password';

   let errMessage: string = 'Oops, something went wrong. Please try signing in again!';

   // Make the post request. environment.apiServer contains the local server address http://localhost:4741
 return this.http.post(environment.apiOrigin + '/sign-in', credentials)
   .subscribe(
     // Save the response to user
     response => {
       this.user = JSON.parse(response['_body']).user;
        this.router.navigate(["/places/"]);
        this.alertService.success(successMessage);
     },
     err => {
       this.alertService.clear();
        if (!email) {
          this.alertService.error(errEmailMessage);
        } if (!password) {
          this.alertService.error(errPasswordMessage);
        } else if (email && password && err.status === 401) {
           this.alertService.error(errUnAuthMessage);
        } else if (email && password) {
          this.alertService.error(errMessage);
        }
     }
   )
}

signUp(email: string, password: string, password_confirmation: string) {
  // Create the credentials object.
  const credentials = {
    'credentials': {
      'email': email,
      'password': password,
      'password_confirmation': password_confirmation
    }
  };

  let successMessage: string = email + ' is successfully registered and signed in!';

  let errEmailMessage: string = 'Email is a required field.';

  let errPasswordMessage: string = 'Password is a required field.';

  let errConfirmPasswordMessage: string = 'Confirm Password is a required field.';

  let errTakenMessage: string = 'Sorry, that email is already taken. Please choose a different email.';

  let errMessage: string = 'Oops, something went wrong. Please try registering again!';

  // Make the post request. environment.apiServer contains the local server address http://localhost:4741
   this.http.post(environment.apiOrigin + '/sign-up', credentials)
     .subscribe(
       response => {
         // Send the existing credentials back to the server to log in the new user
         this.signIn(credentials.credentials.email, credentials.credentials.password);
         this.alertService.success(successMessage);
       },
       err => {
         this.alertService.clear();
      if (!email) {
        this.alertService.error(errEmailMessage);
      } if (!password) {
        this.alertService.error(errPasswordMessage);
      } if (!password_confirmation) {
        this.alertService.error(errConfirmPasswordMessage);
      } else if (email && password && password_confirmation && err._body === '{"email":["has already been taken"]}') {
        this.alertService.error(errTakenMessage);
      } else if (email && password && password_confirmation) {
        this.alertService.error(errMessage);
      }
     }
)
}

 signOut() {

     let errMessage: string = 'Oops, something went wrong. Please try sigining out again!';

    // Create the configuration object to be able to store the Headers > Authentication
    let config = {};

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.getUserToken()};
    // Make the delete request to URL, and add the token from Config.
    this.http.delete(environment.apiOrigin + '/sign-out/' + this.user.id, config)
      .subscribe(
        // Remove the logged in user.
        data => {
          this.user = null;
          this.router.navigate(["/login/"]);
        },
        err => {
          this.alertService.clear();
          this.alertService.error(errMessage);
        }
      )
  }


    changePassword(oldPassword: string, newPassword: string) {
      // Create the passwords data object to send.
      let passwords = {
        'passwords': {
          'old': oldPassword,
          'new': newPassword
        }
      };

      let successMessage: string = 'Password has been changed successfull for ' + this.user.email + ' !';

      let errOldMessage: string = 'Old Password is a required field.';

      let errNewMessage: string = 'New Password is a required field.';

      let errMessage: string = 'Oops, something went wrong. Please try changing your password again!';


          // Create the configuration object to be able to store the Headers > Authentication
          let config = {};

          // Set the headers key
          config['headers'] = { Authorization:'Token token=' + this.getUserToken()};

          // Make the patch request to URL, add the password data and token from Config.
          this.http.patch(environment.apiOrigin + '/change-password/' + this.user.id, passwords, config)
            .subscribe(
              data => {
                this.router.navigate(["/places/"]);
                this.alertService.success(successMessage);
              },
              err => {
                this.alertService.clear();
              if (!oldPassword) {
               this.alertService.error(errOldMessage);
             } if (!newPassword) {
              this.alertService.error(errNewMessage);
            } else if (oldPassword && newPassword) {
              this.alertService.error(errMessage);
            }
              }
            )
        }

}
