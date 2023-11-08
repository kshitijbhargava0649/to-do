import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskDetailComponentComponent } from './task-detail-component/task-detail-component.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes : Routes = [
  {path : '', redirectTo:'/list' , pathMatch: 'full'},
  {path : 'list' , component :TaskListComponentComponent},
  {path : 'task' , component :TaskDetailComponentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    TaskDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
