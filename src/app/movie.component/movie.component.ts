import { Component, Input } from "@angular/core";
import { Movie } from "../movie.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieItem {
  @Input() movie: Movie;

  constructor(private route: ActivatedRoute) {}
}
