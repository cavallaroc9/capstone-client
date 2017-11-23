import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service'

@Component({
  selector: 'app-example-index',
  templateUrl: './example-index.component.html',
  styleUrls: ['./example-index.component.css']
})
export class ExampleIndexComponent implements OnInit {

  allExamples = [];

  deleteExample(deletedExample) {
  this.examplesService.deleteExample(deletedExample)
  .subscribe(response => {
    let exampleIndex = this.allExamples.indexOf(deletedExample);
    this.allExamples.splice(exampleIndex, 1);
  });
}

  constructor(private examplesService : ExamplesService) { }

  ngOnInit() {
    this.examplesService.getAllExamples()
  		.subscribe(response => {
				console.log('response is', response.json());
				this.allExamples = response.json()['examples']
        console.log('all examples are', (this.allExamples))
			});
  }

}
