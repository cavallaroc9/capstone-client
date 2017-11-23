import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { ExamplesService } from '../examples.service';

@Component({
  selector: 'app-example-show',
  templateUrl: './example-show.component.html',
  styleUrls: ['./example-show.component.css']
})
export class ExampleShowComponent implements OnInit {

  oneExample;

  constructor(
    private route : ActivatedRoute,
    private examplesService : ExamplesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
  		this.examplesService.getOneExample(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneExample = response.json()["example"];
        console.log('oneExample IS', this.oneExample)
  		});
  	});
  }

}
