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

  placeFilter: any = {};
  filters = [
    {'type': 'title'},
    {'type': 'city'},
    {'type': 'state'},
    {'type': 'country'}
  ];
  selectedFilter = this.filters[0];
  filterValue;

  max = 5;
  isReadonly = true;
  overStar: number;
  percent: number;

  constructor(
    private placesService : PlacesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    let errMessage: string = 'Oops, something went wrong retrieving your travel memories. Please try again or refresh the page!';

    this.placesService.getAllPlaces()
  		.subscribe(
        response => {
          window.scrollTo(0, 0);
          this.allPlaces = response.json()['places'];
			},
      err => {
        window.scrollTo(0, 0);
        this.alertService.error(errMessage);
      }
    );
  }

    onChange(filters) {
      this.placeFilter = {};
      this.filterValue = filters.type;
      this.placeFilter[filters.type] = '';
    }

    deletePlace(deletedPlace) {
      let successMessage: string = 'Your travel memory was successfully deleted!';
      let errMessage: string = 'Oops, something went wrong deleting your travel memory. Please try again or refresh the page!';

    this.placesService.deletePlace(deletedPlace)
    .subscribe(
      response => {
        let placeIndex = this.allPlaces.indexOf(deletedPlace);
        this.allPlaces.splice(placeIndex, 1);
        window.scrollTo(0, 0);
        this.alertService.success(successMessage);
    },
      err => {
        this.alertService.clear();
        window.scrollTo(0, 0);
        this.alertService.error(errMessage);
      }
  );
  }

}
