import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, IncrementarAction, DecrementarAction } from "./contador/contador.actions";
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoUrl = "https://www.youtube.com/watch?v=CnblWSUFl28";
  contador: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('contador').subscribe( contador =>  {
      this.contador = contador;
    });
  }

  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
