import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { ExampleIndexComponent } from './example-index/example-index.component';
import { ExampleNewComponent } from './example-new/example-new.component';
import { ExampleShowComponent } from './example-show/example-show.component';
import { ExampleEditComponent } from './example-edit/example-edit.component'


const aboutRoutes: Routes = [
    {
        path: 'examples',
        component: ExamplesComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: ExampleIndexComponent
            },
            {
                path: 'new',
                component: ExampleNewComponent
            },
            {
                path: ':id',
                component: ExampleShowComponent
            },
            {
                path: 'edit/:id',
                component: ExampleEditComponent
            },
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
export class ExamplesRoutingModule { }
