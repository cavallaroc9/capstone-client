import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service'

@Injectable()
export class PlacesService {


	getAllPlaces() {

    let config = {}

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('auth', this.authService.getUserToken())

		return this.http.get(`${environment.apiOrigin}/places`, config);
	}

	getOnePlace(placeId) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('auth', this.authService.getUserToken())
		console.log(placeId);
		return this.http.get(`${environment.apiOrigin}/places/${placeId}`, config);
	}

	deletePlace(place) {

    let config = {}

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('auth', this.authService.getUserToken())

		console.log('delete service place.id is', place.id);
		return this.http.delete(`${environment.apiOrigin}/places/${place.id}`, config);
	}

	savePlace(newPlace) {
    let place = {
      'place': {
        'text': newPlace.text
      }
    }


    let config = {}

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
console.log('auth', this.authService.getUserToken())
		console.log('from place service', place);
		return this.http.post(`${environment.apiOrigin}/places/`, place, config);
	}

	updatePlace(updatedPlace) {
    let place = {
      'place': {
        'text': updatedPlace.text
      }
    }
    let config = {}


    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('from update service', updatedPlace.id, updatedPlace.text)
		return this.http.put(`${environment.apiOrigin}/places/${updatedPlace.id}`, place, config);
	}

  constructor(
    private http: Http,
    private authService : AuthService,
  ) { }

}
