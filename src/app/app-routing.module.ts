import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { FilmSearchComponent } from './login-form/film-search/film-search.component';
import { AuthenticationServiceService } from './services/authentication-service.service';

const routes: Routes = [
  {
    path:'',
    component:LoginFormComponent
  },
  {
    path:'login',
    component:LoginFormComponent
  },

  {
    path:'search',
    component:FilmSearchComponent
  },
  {
    path:'authenticate',
    component:AuthenticationServiceService
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
