import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private title = new BehaviorSubject<String>('App title');
  private title$ = this.title.asObservable(); // title$ vai ficar observando title

  constructor() { }

  // altera o nome do título
  setTitle(title: String) {
    this.title.next(title);
  }

  // retorna o título atual
  getTitle(): Observable<String> {
    return this.title$;
  }

}
