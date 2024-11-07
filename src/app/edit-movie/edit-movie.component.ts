import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieForm: FormGroup;
  movieId!: number;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      year: ['', Validators.required],
      cover: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieId = id ? +id : 0; 
    if (this.movieId !== 0) {
      this.movieService.getMovie(this.movieId).subscribe(movie => {
        this.movieForm.patchValue(movie);
      });
    } else {
      console.error('Invalid movie ID');
    }
  }

  onSubmit() {
    if (this.movieForm.valid) {
      this.movieService.updateMovie(this.movieId, this.movieForm.value).subscribe(response => {
        console.log('Movie updated:', response);
        this.router.navigate(['/movies']);
      });
    }
  }
}
