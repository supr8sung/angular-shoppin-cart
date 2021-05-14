import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-module/login/login.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  // loadChildren: './login-module/login.module#LoginModule',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
