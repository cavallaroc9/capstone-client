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
    console.log('from getAllPlaces')
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
        'title': newPlace.title,
        'city': newPlace.city,
        'state': newPlace.state,
        'country': newPlace.country,
        'description': newPlace.description,
        'start_date': newPlace.start_date,
        'end_date': newPlace.end_date,
        'rating': newPlace.rating,
        'photoUrl': newPlace.photoUrl,
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
        'title': updatedPlace.title,
        'city': updatedPlace.city,
        'state': updatedPlace.state,
        'country': updatedPlace.country,
        'description': updatedPlace.description,
        'start_date': updatedPlace.start_date,
        'end_date': updatedPlace.end_date,
        'rating': updatedPlace.rating,
        'photoUrl': updatedPlace.photoUrl
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
