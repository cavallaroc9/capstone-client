import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../services/index';

import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';


@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  updatedPlace = <any>{};

  max = 5;
  isReadonly = false;

  overStar: number;
  percent: number;

  @ViewChild('search') public searchElement: ElementRef;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private placesService : PlacesService,
    private alertService: AlertService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    let errMessage: string = 'Oops, something went wrong retrieving your travel memory. Please try again or refresh the page!';

    this.route.params.forEach( param => {
      this.placesService.getOnePlace(param.id)
      .subscribe(
        response => {
        window.scrollTo(0, 0);
        this.updatedPlace = response.json()['place'];
      },
      err => {
        this.router.navigate(["/places"]);
        window.scrollTo(0, 0);
        this.alertService.error(errMessage);
      }
    );
    });

    let componentForm = {
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
    }

    this.mapsAPILoader.load().then(
       () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:['geocode'] });

         autocomplete.addListener("place_changed", () => {
         this.ngZone.run(() => {

          this.updatedPlace['city'] = '';
          this.updatedPlace['state'] = '';
          this.updatedPlace['country'] = '';

          let resultPlace: google.maps.places.PlaceResult = autocomplete.getPlace();

          for (var i = 0; i < resultPlace.address_components.length; i++) {
                    let addressType = resultPlace.address_components[i].types[0];

                    if (componentForm[addressType]) {
                      if (addressType === 'locality') {
                        let val = resultPlace.address_components[i][componentForm[addressType]];
                        this.updatedPlace['city'] = val;
                      } else if (addressType === 'administrative_area_level_1') {
                        let val = resultPlace.address_components[i][componentForm[addressType]];
                        this.updatedPlace['state'] = val;
                      } else if (addressType === 'country') {
                        let val = resultPlace.address_components[i][componentForm[addressType]];
                        this.updatedPlace['country'] = val;
                      }
                    }

                  }

          if(resultPlace.geometry === undefined || resultPlace.geometry === null ){
           return;
          }
         });
         });
       }
          );
  }


  hoveringOver(value: number): void {
  this.overStar = value;
  this.percent = (value / this.max) * 100;
}


  updatePlace(updatedPlace) {

    let successMessage: string = 'Your travel memory was successfully updated!';

    let errTitleMessage: string = 'Title is a required field.';

    let errCountryMessage: string = 'Country is a required field.';

    let errMessage: string = 'Oops, something went wrong updating your travel memory. Please try again or refresh the page!';

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
