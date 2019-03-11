import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainButtonComponent } from './components/main/main-button/main-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
