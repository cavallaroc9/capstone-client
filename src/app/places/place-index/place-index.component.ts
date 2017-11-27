import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { AlertService } from '../../services/index';


@Component({
  selector: 'app-place-index',
  templateUrl: './place-index.component.html',
  styleUrls: ['./place-index.component.css']
})
export class PlaceIndexComponent implements OnInit {

  allPlaces = [];

  deletePlace(deletedPlace) {
  this.placesService.deletePlace(deletedPlace)
  .subscribe(response => {
    let placeIndex = this.allPlaces.indexOf(deletedPlace);
    this.allPlaces.splice(placeIndex, 1);
  });
}

  constructor(
    private placesService : PlacesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
     let errMessage: string = 'Oops, something went wrong. Please try again or refresh the page!';

    this.placesService.getAllPlaces()
  		.subscribe(
        response => {
          console.log('response is', response.json());
          this.allPlaces = response.json()['places'];
          console.log('all places are', (this.allPlaces));
			},
      err => {
        console.log('err', err);
        window.scrollTo(0, 0);
        this.alertService.error(errMessage);
      }
    );
  }

}
