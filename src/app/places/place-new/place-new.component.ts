import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/index';

@Component({
  selector: 'app-place-new',
  templateUrl: './place-new.component.html',
  styleUrls: ['./place-new.component.css']
})
export class PlaceNewComponent implements OnInit {

  newPlace = <any>{};

  constructor(
    private placesService : PlacesService,
    private router : Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


    savePlace(newPlace) {

      let successMessage: string = 'New Place was successfully added!';

      let errTitleMessage: string = 'Title is a required field.';

      let errCityMessage: string = 'City is a required field.';

      let errCountryMessage: string = 'Country is a required field.';

      let errMessage: string = 'Oops, something went wrong saving your place. Please try again or refresh the page!';

    	console.log("saving place");
    	console.log(newPlace);
    	this.placesService.savePlace(newPlace)
    			.subscribe(
            response => {
              console.log(response.json());
              let place = response.json()['place'];
              this.router.navigate(["/places/" + place.id]);
              this.alertService.success(successMessage);
  		},
          err => {
            this.alertService.clear();
            if (!newPlace.title) {
              window.scrollTo(0, 0);
              this.alertService.error(errTitleMessage);
            } if (!newPlace.city) {
              window.scrollTo(0, 0);
              this.alertService.error(errCityMessage);
            } if (!newPlace.country) {
              window.scrollTo(0, 0);
              this.alertService.error(errCountryMessage);
            } else if (newPlace.title && newPlace.city && newPlace.country){
              window.scrollTo(0, 0);
              this.alertService.error(errMessage);
            }

          }
    )
    }

    cancelPlace() {
      this.router.navigate(["/places"]);
    }

}
