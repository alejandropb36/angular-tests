import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { IncrementarAction, DecrementarAction } from "./contador/contador.actions";
import * as fromContador from './contador/contador.actions';
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
    const accion = new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    const accion = new fromContador.DecrementarAction();
    this.store.dispatch(accion);
  }
}
