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
      let errMessage: string = 'Oops, something went wrong. Please try again or refresh the page!';

      let successMessage: string = 'New Place was successfully added!';

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
            window.scrollTo(0, 0);
            this.alertService.error(errMessage);
          }
    )
    }

    cancelPlace() {
      this.router.navigate(["/places"]);
    }

}
