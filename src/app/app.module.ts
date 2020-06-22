import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NouveauComponent } from './theme/nouveau/nouveau.component';
import { ColorDirective } from './shared/directives/color.directive'


@NgModule({
  declarations: [
    AppComponent,
    NouveauComponent,
    ColorDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
