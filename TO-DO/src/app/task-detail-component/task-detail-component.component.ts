import { Component } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { DataListService } from '../services/data-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent {
  textFieldValue: string='';
  textAreaValue: string='';
  taskDate : Date= new Date();

  constructor(private task:TaskServiceService , private snack:MatSnackBar ){}
  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 2000, // Duration in milliseconds
    });
  }
  
  onClick(){
    this.task.insert(this.textFieldValue,this.textAreaValue,this.taskDate);
    this.task.show();
    this.openSnackBar('Task added successfully', 'Close');
  }
}
