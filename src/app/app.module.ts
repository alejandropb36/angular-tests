import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ngrx
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Ngrx counter documentacion oficial
// import { counterReducer } from './components/counter/counter.reducer';

// ngx-chips tag input
import { TagInputModule } from 'ngx-chips';
import { TagInputComponent } from './components/tag-input/tag-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
// import { YoutubeIframeComponent } from './components/youtube-iframe/youtube-iframe.component';
// import { environment } from 'src/environments/environment';
// import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    // YoutubeIframeComponent,
    // CounterComponent,
    TagInputComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({ count: counterReducer }),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production
    // }),
    TagInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
