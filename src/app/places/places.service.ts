import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service'

@Injectable()
export class PlacesService {


	getAllPlaces() {

    let config = {};

     let errMessage: string = 'Oops, something went wrong. Please refresh and try again!';

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()};
		return this.http.get(`${environment.apiOrigin}/places`, config);
	}

	getOnePlace(placeId) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {};

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
		return this.http.get(`${environment.apiOrigin}/places/${placeId}`, config);
	}

	deletePlace(place) {

    let config = {};

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()};

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
    };

    let config = {};

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()};
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
    };

    let config = {};


    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()};
		return this.http.put(`${environment.apiOrigin}/places/${updatedPlace.id}`, place, config);
	}

  constructor(
    private http: Http,
    private authService : AuthService
  ) { }

}
