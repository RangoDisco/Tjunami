import { Component, OnInit } from '@angular/core';
import { Movie } from '../common/movie.model';
import { MoviesService } from '../common/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((response) => {
      this.movies = response;
    });
  }
}
