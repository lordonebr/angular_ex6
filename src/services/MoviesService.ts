import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieCategory } from "../app/movieCategory.enum";

const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
const withBaseUrl = (path, page) =>
  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}&language=pt-BR&page=${page}`;

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieDetail(id: number): Observable<any> {
    return this.http.get(withBaseUrl("movie/" + id, 1));
  }

  getMovieCategory(category: MovieCategory, page: number): Observable<any> {
    if (category === MovieCategory.Popular)
      return this.http.get(withBaseUrl("movie/popular", page));
    else if (category === MovieCategory.TopRated)
      return this.http.get(withBaseUrl("movie/top_rated", page));
    else if (category === MovieCategory.NowPlaying)
      return this.http.get(withBaseUrl("movie/now_playing", page));
    else if (category === MovieCategory.Upcoming)
      return this.http.get(withBaseUrl("movie/upcoming", page));

    return null;
  }
}
