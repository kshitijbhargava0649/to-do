import { Component } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { DataListService } from '../services/data-list.service';

@Component({
  selector: 'task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent {
  textFieldValue: string='';
  textAreaValue: string='';
  taskDate : Date= new Date();

  constructor(private task:TaskServiceService){}

  onClick(){
    this.task.insert(this.textFieldValue,this.textAreaValue,this.taskDate);
    this.task.show();
  }
}
