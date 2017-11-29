import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/index';

@Component({
  selector: 'app-place-show',
  templateUrl: './place-show.component.html',
  styleUrls: ['./place-show.component.css']
})
export class PlaceShowComponent implements OnInit {

  onePlace;
  allPlaces = [];

  max = 5;
  isReadonly = true;
  overStar: number;
  percent: number;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private placesService : PlacesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    let errMessage: string = 'Oops, something went wrong retrieving your travel memory. Please try again or refresh the page!';


    this.route.params.forEach( param => {
  		this.placesService.getOnePlace(param.id)
  		.subscribe(
        response => {
          window.scrollTo(0, 0);
          console.log(response.json());
          this.onePlace = response.json()["place"];
          console.log('onePlace IS', this.onePlace);
  		},
        err => {
          this.router.navigate(["/places"]);
          window.scrollTo(0, 0);
          this.alertService.error(errMessage);
        }
    );
  	});
  }


    deletePlace(deletedPlace) {
      let successMessage: string = 'Your travel memory was successfully deleted!';
      let errMessage: string = 'Oops, something went wrong deleting your travel memory. Please try again or refresh the page!';

    this.placesService.deletePlace(deletedPlace)
    .subscribe(
      response => {
      let placeIndex = this.allPlaces.indexOf(deletedPlace);
      this.allPlaces.splice(placeIndex, 1);
      this.router.navigate(["/places"]);
      this.alertService.success(successMessage);
    },
    err => {
      window.scrollTo(0, 0);
      this.alertService.error(errMessage);
    }
  );
  }

}
