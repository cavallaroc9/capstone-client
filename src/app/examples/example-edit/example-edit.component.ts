import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-example-edit',
  templateUrl: './example-edit.component.html',
  styleUrls: ['./example-edit.component.css']
})
export class ExampleEditComponent implements OnInit {

updatedExample = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private examplesService : ExamplesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.examplesService.getOneExample(param.id)
      .subscribe(response => {
        console.log('from edit', response.json());
        this.updatedExample = response.json()['example'];
      });
    });
  }

  updateExample(updatedExample) {
  console.log("updating example yo!");
  this.examplesService.updateExample(updatedExample)
  .subscribe(response => {
    console.log('from updateExample fnc', response.json());
    let example = response.json();
    this.router.navigate(["/examples/" + example.id]);
  });
}

}
