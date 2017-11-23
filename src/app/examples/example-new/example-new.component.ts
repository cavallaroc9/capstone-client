import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-new',
  templateUrl: './example-new.component.html',
  styleUrls: ['./example-new.component.css']
})
export class ExampleNewComponent implements OnInit {

  newExample = <any>{};

  constructor(
    private examplesService : ExamplesService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  saveExample(newExample) {
  	console.log("saving example");
  	console.log(newExample);
  	this.examplesService.saveExample(newExample)
  			.subscribe(response => {
			console.log(response.json());
			let example = response.json()['example'];
			this.router.navigate(["/examples/" + example.id]);
		})
  }


}
