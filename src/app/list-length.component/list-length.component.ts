import { Component, Input } from "@angular/core";

@Component({
  selector: "list-length",
  templateUrl: "./list-length.component.html",
  styleUrls: ["./list-length.component.css"]
})
export class ListLength {
  @Input() moviesLength: number;
}
