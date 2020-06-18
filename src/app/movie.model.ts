export class Movie {
  id: number;
  name: string;
  originalName: string;
  urlPoster: string;
  releaseDate: string;
  sinopse: string;
  nota: number;
  generos: string[];

  constructor(
    id: number,
    name: string,
    urlPoster: string,
    release_date: string
  ) {
    this.id = id;
    this.name = name;
    this.urlPoster = urlPoster;
    this.releaseDate = release_date;
    this.generos = [];
  }
}
