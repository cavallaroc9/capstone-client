import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlaceIndexComponent } from './place-index/place-index.component';
import { PlacesComponent } from './places.component';
import { PlaceNewComponent } from './place-new/place-new.component';
import { PlaceShowComponent } from './place-show/place-show.component';
import { PlaceEditComponent } from './place-edit/place-edit.component'
import { PlacesService } from './places.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PlaceIndexComponent, PlacesComponent, PlaceNewComponent, PlaceShowComponent, PlaceEditComponent ],
  providers: [PlacesService]
})
export class PlacesModule { }
