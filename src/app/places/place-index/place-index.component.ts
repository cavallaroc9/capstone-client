import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service'

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

  constructor(private placesService : PlacesService) { }

  ngOnInit() {
    this.placesService.getAllPlaces()
  		.subscribe(response => {
				console.log('response is', response.json());
				this.allPlaces = response.json()['places']
        console.log('all places are', (this.allPlaces))
			});
  }

}
