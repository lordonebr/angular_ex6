import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieCategory } from "../movieCategory.enum";

@Component({
  templateUrl: "./type-movies.component.html",
  styleUrls: ["./type-movies.component.css"]
})
export class TypeMovies implements OnInit {
  category = MovieCategory.None;
  filter = "";
  quantityPages = 1;

  handleFilter(filter: string) {
    console.log("Filtro digitado: ", filter);
    this.filter = filter;
  }

  handleSearchQuantity(quantity: number) {
    console.log("Quantidade de filmes a pesquisar: ", quantity);
    this.quantityPages = quantity;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params["type"];
    });
  }
}
