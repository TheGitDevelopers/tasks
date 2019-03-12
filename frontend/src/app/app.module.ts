import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainButtonComponent } from './components/main/main-button/main-button.component';
import { NegotiumTaskComponent } from './components/negotium-task/negotium-task.component';
import { NegotiumListAppComponent } from './components/negotium-task/negotium-list-app/negotium-list-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainButtonComponent,
    NegotiumTaskComponent,
    NegotiumListAppComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
