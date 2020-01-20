import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
      });
  }

  multiplicar() {
    // this.contador *= 2;
    const accion = new MultiplicarAction();
    this.store.dispatch(accion);
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new DividirAction();
    this.store.dispatch(accion);
  }

  resetNieto(event) {
    this.contador = event;
    // this.cambioContador.emit(this.contador);
  }

}
