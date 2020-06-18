import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "header-title",
  templateUrl: "./header-title.component.html",
  styleUrls: ["./header-title.component.css"]
})
export class HeaderTitle {
  @Input() msg: string;
  @Output() onClickTitle = new EventEmitter();

  constructor(private route: ActivatedRoute) {}

  onClickLoadInitialRoute() {
    this.onClickTitle.emit();
  }
}
