import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  updatedPlace = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private placesService : PlacesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.placesService.getOnePlace(param.id)
      .subscribe(response => {
        console.log('from edit', response.json());
        this.updatedPlace = response.json()['place'];
      });
    });
  }

  updatePlace(updatedPlace) {
  console.log("updating example yo!");
  this.placesService.updatePlace(updatedPlace)
  .subscribe(()=> this.router.navigate(["/places"]));
}

}
