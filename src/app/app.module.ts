import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubeIframeComponent } from './components/youtube-iframe/youtube-iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeIframeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
