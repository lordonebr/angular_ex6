import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class Filter {
  @Output() onFilter = new EventEmitter<string>();
  filter: "";

  onInputChange(name) {
    this.onFilter.emit(name);
  }
}
