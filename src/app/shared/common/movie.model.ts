// Modélisation des films tels que reçus par l'API
export class Movie {
  public adult: boolean;
  public backdrop_path: string;
  public genre_ids: number[];
  public id: number;
  public original_language: string;
  public original_title: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public release_date: string;
  public title: string;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;

  constructor(
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  ) {
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.genre_ids = genre_ids;
    this.id = id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
