import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-show',
  templateUrl: './place-show.component.html',
  styleUrls: ['./place-show.component.css']
})
export class PlaceShowComponent implements OnInit {

  onePlace;

  constructor(
    private route : ActivatedRoute,
    private placesService : PlacesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
  		this.placesService.getOnePlace(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.onePlace = response.json()["place"];
        console.log('onePlace IS', this.onePlace)
  		});
  	});
  }

}
