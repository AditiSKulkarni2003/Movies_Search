import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { NgForDComponent } from './ng-for-d/ng-for-d.component';
import { PipesComponent } from './pipes/pipes.component';
import { BlogPostComponentComponent } from './blog-post-component/blog-post-component.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FilmComponent } from './login-form/film/film.component';
import { FilmSearchComponent } from './login-form/film-search/film-search.component';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LoginFormComponent,
    NgForDComponent,
    PipesComponent,
    BlogPostComponentComponent,
    AddTaskComponent,
    FilmComponent,
    FilmSearchComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
