import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventMovieDetailService } from "../../services/EventMovieDetailService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Filmes";
  menu: object[];
  menuSelected = "";
  urlRouter = "";

  constructor(
    private route: ActivatedRoute,
    private eventClickedMovieDetailService: EventMovieDetailService
  ) {}

  ngOnInit() {
    // se um filme for detalhado, vamos remover a categoria de filme selecionada
    this.eventClickedMovieDetailService.events$.forEach(
      event => (this.menuSelected = "")
    );

    this.urlRouter = window.location.href;
    this.menuSelected =
      "list-movies/" +
      this.urlRouter.substring(this.urlRouter.lastIndexOf("/") + 1);

    this.menu = [];
    this.menu.push({ router: "list-movies/popular", name: "Populares" });
    this.menu.push({ router: "list-movies/topRated", name: "Melhores" });
    this.menu.push({ router: "list-movies/nowPlaying", name: "Cinema" });
    this.menu.push({ router: "list-movies/upcoming", name: "Próximos" });
  }

  onClickButtonMenu(routerName) {
    console.log("Rota ativada: " + routerName);
    this.menuSelected = routerName;
  }

  // se o titulo for clicado, vamos remover a categoria de filme selecionada
  handleClickTitle() {
    this.menuSelected = "";
  }
}
