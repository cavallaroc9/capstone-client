import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../services/index';


@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  updatedPlace = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private placesService : PlacesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    let errMessage: string = 'Oops, something went wrong retrieving your place. Please try again or refresh the page!';

    this.route.params.forEach( param => {
      this.placesService.getOnePlace(param.id)
      .subscribe(
        response => {
        window.scrollTo(0, 0);
        console.log('from edit', response.json());
        this.updatedPlace = response.json()['place'];
      },
      err => {
        this.router.navigate(["/places"]);
        window.scrollTo(0, 0);
        this.alertService.error(errMessage);
      }
    );
    });
  }

  updatePlace(updatedPlace) {

    let successMessage: string = 'Your place was successfully updated!';

    let errTitleMessage: string = 'Title is a required field.';

    let errCountryMessage: string = 'Country is a required field.';

    let errMessage: string = 'Oops, something went wrong updating your place. Please try again or refresh the page!';

  console.log("updating example yo!");
  this.placesService.updatePlace(updatedPlace)
  .subscribe(
    response => {
      this.router.navigate(["/places/" + updatedPlace.id]);
      this.alertService.success(successMessage);
    },
    err => {
      this.alertService.clear();
      if (!updatedPlace.title) {
        window.scrollTo(0, 0);
        this.alertService.error(errTitleMessage);
      } if (!updatedPlace.country) {
        window.scrollTo(0, 0);
        this.alertService.error(errCountryMessage);
      } else if (updatedPlace.title && updatedPlace.city && updatedPlace.country){
        window.scrollTo(0, 0);
        this.alertService.error(errMessage);
      }
    }
  );
  }

  cancelPlace() {
    this.router.navigate(["/places"]);
  }

}
