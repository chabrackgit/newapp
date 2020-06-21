import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NouveauComponent } from './theme/nouveau/nouveau.component';


@NgModule({
  declarations: [
    AppComponent,
    NouveauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
