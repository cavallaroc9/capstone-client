import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExampleIndexComponent } from './example-index/example-index.component';
import { ExamplesComponent } from './examples.component';
import { ExampleNewComponent } from './example-new/example-new.component';
import { ExampleShowComponent } from './example-show/example-show.component';
import { ExampleEditComponent } from './example-edit/example-edit.component'
import { ExamplesService } from './examples.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ExampleIndexComponent, ExamplesComponent, ExampleNewComponent, ExampleShowComponent, ExampleEditComponent ],
  providers: [ExamplesService]
})
export class ExamplesModule { }
