import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { ChangePasswordComponent } from './change-password.component';


const changePasswordRoutes: Routes = [
    {
        path: 'change-password',
        component: ChangePasswordComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(changePasswordRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class ChangePasswordRoutingModule { }
