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

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private placesService : PlacesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    let errMessage: string = 'Oops, something went wrong. Please try again or refresh the page!';

    this.route.params.forEach( param => {
  		this.placesService.getOnePlace(param.id)
  		.subscribe(
        response => {
          console.log(response.json());
          this.onePlace = response.json()["place"];
          console.log('onePlace IS', this.onePlace);
  		},
        err => {
          this.router.navigate(["/places"]);
          this.alertService.error(errMessage)
        }
    );
  	});
  }

}
