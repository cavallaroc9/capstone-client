import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-modal";
import { RatingModule } from 'ngx-bootstrap/rating';
import { PlaceIndexComponent } from './place-index/place-index.component';
import { PlacesComponent } from './places.component';
import { PlaceNewComponent } from './place-new/place-new.component';
import { PlaceShowComponent } from './place-show/place-show.component';
import { PlaceEditComponent } from './place-edit/place-edit.component'
import { PlacesService } from './places.service';
import { AlertService } from '../services/index';

import { AgmCoreModule } from '@agm/core';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    RatingModule.forRoot(),
    FilterPipeModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDO_u2FHozo4P8o-V7YtHs9vcOhEnf79is',
      libraries: ['places']
    })
  ],
  declarations: [PlaceIndexComponent, PlacesComponent, PlaceNewComponent, PlaceShowComponent, PlaceEditComponent],
  providers: [PlacesService, AlertService]
})
export class PlacesModule { }
