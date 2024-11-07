import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddMovieComponent } from './app/add-movie/add-movie.component'; 
import { EditMovieComponent } from './app/edit-movie/edit-movie.component'; 
import { MoviesComponent } from './app/movies/movies.component'; 
import { MovieComponent } from './app/movie/movie.component';



bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom( 
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        { path: '', component: MoviesComponent }, 
        { path: 'movie/:id', component: MovieComponent }, 
        { path: 'add-movie', component: AddMovieComponent }, 
        { path: 'edit-movie/:id', component: EditMovieComponent },
      ])
    ),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
