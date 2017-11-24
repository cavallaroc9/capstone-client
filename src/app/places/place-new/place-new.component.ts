import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-new',
  templateUrl: './place-new.component.html',
  styleUrls: ['./place-new.component.css']
})
export class PlaceNewComponent implements OnInit {

  newPlace = <any>{};

  constructor(
    private placesService : PlacesService,
    private router : Router
  ) { }

  ngOnInit() {
  }


    savePlace(newPlace) {
    	console.log("saving place");
    	console.log(newPlace);
    	this.placesService.savePlace(newPlace)
    			.subscribe(response => {
  			console.log(response.json());
  			let place = response.json()['place'];
  			this.router.navigate(["/places/" + place.id]);
  		})
    }

}
