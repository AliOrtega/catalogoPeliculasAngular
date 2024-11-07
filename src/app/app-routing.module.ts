import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { provideHttpClient } from '@angular/common/http';
import { AddMovieComponent } from './add-movie/add-movie.component'; 
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'add-movie', component: AddMovieComponent }, 
  { path: 'edit-movie/:id', component: EditMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideHttpClient()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
