import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { MainButtonsComponent } from './components/main-component/main-buttons/main-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    MainButtonsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
