import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainButtonComponent } from './components/main/main-button/main-button.component';
import { NegotiumTaskComponent } from './components/negotium-task/negotium-task.component';
import { NegotiumListAppComponent } from './components/negotium-task/negotium-list-app/negotium-list-app.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormFieldComponent } from './components/create-task/form-field/form-field.component';
import { SelectLevelComponent } from './components/create-task/select-level/select-level.component';
import { ButtonSelectCategoryComponent } from './components/create-task/button-select-category/button-select-category.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainButtonComponent,
    NegotiumTaskComponent,
    NegotiumListAppComponent,
    CreateTaskComponent,
    FormFieldComponent,
    SelectLevelComponent,
    ButtonSelectCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
