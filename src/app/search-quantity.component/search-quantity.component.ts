import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-quantity",
  templateUrl: "./search-quantity.component.html",
  styleUrls: ["./search-quantity.component.css"]
})
export class SearchQuantity {
  @Output() onChangeSearchQuantity = new EventEmitter<number>();

  options: object[];
  qtOptions: number;
  tamPage = 20;
  qtPageSel = 1;

  ngOnInit() {
    this.qtOptions = 5;
    this.options = [];
    for (let idx = 1; idx <= this.qtOptions; idx++) {
      let qt = idx * this.tamPage;
      this.options.push({ page: idx, quantity: qt });
    }
  }

  onClick(qtPage) {
    this.qtPageSel = qtPage;
    this.onChangeSearchQuantity.emit(qtPage);
  }
}
