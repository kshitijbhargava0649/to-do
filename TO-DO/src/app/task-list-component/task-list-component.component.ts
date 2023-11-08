import { Component } from '@angular/core';
import { DataListService } from '../services/data-list.service';
import { TaskServiceService } from '../services/task-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent {
  searchText:string='';
  // taskList:number[]=[1,2,3,4,];
  // taskList:DataListService[]=this.task.dataList.slice();
  // constructor(private list:DataListService){}
  taskList:DataListService[]=TaskServiceService.dataList;
  
}
