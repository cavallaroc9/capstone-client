import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/index';

import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-place-new',
  templateUrl: './place-new.component.html',
  styleUrls: ['./place-new.component.css']
})
export class PlaceNewComponent implements OnInit {

  newPlace = <any>{};

  max = 5;
  isReadonly = false;
  overStar: number;
  percent: number;

   @ViewChild('search') public searchElement: ElementRef;

  constructor(
    private placesService : PlacesService,
    private router : Router,
    private alertService: AlertService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
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

          this.newPlace['city'] = '';
          this.newPlace['state'] = '';
          this.newPlace['country'] = '';

          let resultPlace: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log('place is', resultPlace);


          for (var i = 0; i < resultPlace.address_components.length; i++) {
                    let addressType = resultPlace.address_components[i].types[0];
                    console.log('addressType is', addressType)
                    console.log('component', componentForm)
                    if (componentForm[addressType]) {
                      if (addressType === 'locality') {
                        let val = resultPlace.address_components[i][componentForm[addressType]];
                        this.newPlace['city'] = val;
                      } else if (addressType === 'administrative_area_level_1') {
                        let val = resultPlace.address_components[i][componentForm[addressType]];
                        this.newPlace['state'] = val;
                      } else if (addressType === 'country') {
                        let val = resultPlace.address_components[i][componentForm[addressType]];
                        this.newPlace['country'] = val;
                      }
                    }
                    console.log ('place is ', this.newPlace)
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

resetStar(): void {
  this.overStar = void 0;
}


    savePlace(newPlace) {

      let successMessage: string = 'Travel memory was successfully saved!';

      let errTitleMessage: string = 'Title is a required field.';

      let errCountryMessage: string = 'Country is a required field.';

      let errMessage: string = 'Oops, something went wrong saving your travel memory. Please try again or refresh the page!';

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
