import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { DataListService } from '../services/data-list.service';
import { TaskServiceService } from '../services/task-service.service';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent {
  searchText:string='';
  router: Router = inject(Router);

  constructor(private task : TaskServiceService ){}
  taskList:DataListService[]=TaskServiceService.dataList;
  
  onClick(index:number){
    this.router.navigate(['/task', index]);
  }

  onDelete(index:number){
    TaskServiceService.dataList.splice(index,1);
  }
}
