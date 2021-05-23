import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './login-module/items/items.component';
import { AuthGuard } from './login-module/login/guards/auth.guard';
import { LoginComponent } from './login-module/login/login.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: "items",
  component: ItemsComponent,
  canActivate: [AuthGuard]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
