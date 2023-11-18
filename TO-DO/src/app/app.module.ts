import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskDetailComponentComponent } from './task-detail-component/task-detail-component.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes : Routes = [
  {path : '', redirectTo:'/list' , pathMatch: 'full'},
  {path : 'task/:index' , component : TaskDetailComponentComponent},
  {path : 'list' , component :TaskListComponentComponent},
  {path : 'task' , component :TaskDetailComponentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    TaskDetailComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
