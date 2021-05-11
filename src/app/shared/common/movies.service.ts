import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private completeUrl: string =
    'https://api.themoviedb.org/3/discover/movie?api_key=1c1ad6da4a25190317ffd7a9860d839f&with_genres=878&language=fr-FR';

  /*   private baseUrl: string =
    'https://api.themoviedb.org/3/discover/movie?api_key=';
  private apiKey: string = '1c1ad6da4a25190317ffd7a9860d839f'; */

  constructor(private service: HttpClient) {}

  //On requête l'API pour obtenir les films
  public getMovies(): Observable<Movie[]> {
    const movies: Observable<any> = this.service.get(`${this.completeUrl}`);
    const treatment = (param_data: any) => {
      return param_data.results as Movie[];
    };
    return movies.pipe(map(treatment));
  }

}
