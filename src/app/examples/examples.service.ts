import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service'

@Injectable()
export class ExamplesService {


	getAllExamples() {

    let config = {}

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('auth', this.authService.getUserToken())

		return this.http.get(`${environment.apiOrigin}/examples`, config);
	}

	getOneExample(exampleId) {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('auth', this.authService.getUserToken())
		console.log(exampleId);
		return this.http.get(`${environment.apiOrigin}/examples/${exampleId}`, config);
	}

	deleteExample(example) {

    let config = {}

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('auth', this.authService.getUserToken())

		console.log('delete service example.id is', example.id);
		return this.http.delete(`${environment.apiOrigin}/examples/${example.id}`, config);
	}

	saveExample(newExample) {
    let example = {
      'example': {
        'text': newExample.text
      }
    }


    let config = {}

    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
console.log('auth', this.authService.getUserToken())
		console.log('from example service', example);
		return this.http.post(`${environment.apiOrigin}/examples/`, example, config);
	}

	updateExample(updatedExample) {
    let example = {
      'example': {
        'text': updatedExample.text
      }
    }
    let config = {}


    config['headers'] = { Authorization:'Token token=' + this.authService.getUserToken()}
    console.log('from update service', updatedExample.id, updatedExample.text)
		return this.http.put(`${environment.apiOrigin}/examples/${updatedExample.id}`, example, config);
	}

  constructor(
    private http: Http,
    private authService : AuthService,
  ) { }

}
