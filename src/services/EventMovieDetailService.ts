import { Subject } from "rxjs/Subject";

// classe para criar um evento para comunicação entre componentes que estão sem comunicação direta
export class EventMovieDetailService {
  private _subject = new Subject<any>();

  newEvent(event) {
    this._subject.next(event);
  }

  get events$() {
    return this._subject.asObservable();
  }
}
