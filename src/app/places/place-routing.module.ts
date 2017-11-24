import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places.component';
import { PlaceIndexComponent } from './place-index/place-index.component';

const aboutRoutes: Routes = [
    {
        path: 'places',
        component: PlacesComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: PlaceIndexComponent
            }
        //     {
        //         path: 'new',
        //         component: PlaceNewComponent
        //     },
        //     {
        //         path: ':id',
        //         component: PlaceShowComponent
        //     },
        //     {
        //         path: 'edit/:id',
        //         component: PlaceEditComponent
        //     },
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlaceRoutingModule { }
