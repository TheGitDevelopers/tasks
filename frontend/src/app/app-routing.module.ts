import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { NegotiumTaskComponent } from './components/negotium-task/negotium-task.component';
import { NegotiumTaskDetailsComponent } from './components/negotium-task/negotium-task-details/negotium-task-details.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'negotium-task/:mode', component: NegotiumTaskComponent },
  {
    path: 'negotium-task-details/:name',
    component: NegotiumTaskDetailsComponent
  },
  { path: 'negotium-task/', component: NegotiumTaskDetailsComponent },
  { path: 'create-task', component: CreateTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
