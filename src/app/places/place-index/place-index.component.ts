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
  // placeFilter: any = { title: ''};
  placeFilter: any = {};

  filters = [
    {'type': 'title'},
    {'type': 'city'},
    {'type': 'state'},
    {'type': 'country'}
  ];
  selectedFilter = this.filters[0];

  filterValue;

  constructor(
    private placesService : PlacesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    let errMessage: string = 'Oops, something went wrong. Please try again or refresh the page!';

    console.log('selected filter', this.selectedFilter)

    this.placesService.getAllPlaces()
  		.subscribe(
        response => {
          window.scrollTo(0, 0);
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

    onChange(filters) {
      this.placeFilter = {};
      this.filterValue = filters.type;
      this.placeFilter[filters.type] = '';
      console.log('place filter is', this.placeFilter);
    }

    deletePlace(deletedPlace) {
      let successMessage: string = 'Your place was successfully deleted!';
      let errMessage: string = 'Oops, something went wrong deleting your place. Please try again or refresh the page!';

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
