import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { contadorReducer } from './contador/contador.reducer';

// Ngrx counter documentacion oficial
import { counterReducer } from "./components/counter/counter.reducer";


import { AppComponent } from './app.component';
import { YoutubeIframeComponent } from './components/youtube-iframe/youtube-iframe.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from 'src/environments/environment';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeIframeComponent,
    HijoComponent,
    NietoComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
