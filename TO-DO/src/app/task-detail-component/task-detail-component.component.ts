import { Component ,OnInit} from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { DataListService } from '../services/data-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { TaskListComponentComponent } from '../task-list-component/task-list-component.component';



@Component({
  selector: 'task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})

export class TaskDetailComponentComponent{
  textFieldValue: string='';
  textAreaValue: string='';
  taskDate : Date = new Date();
  index:number= -1 ;
  testing:string = "kshitij";
  
  // toShowField:string='Hey show this';
  // toShowArea:string='';
  // toShowDate:Date =  new Date();

  isEditable = true;

  constructor(private task:TaskServiceService , private snack:MatSnackBar , private route: ActivatedRoute ){}

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

  ngOnInit(): void {
    
    // console.log('toShowField:', this.toShowField);
    this.route.params.subscribe(params => {
      this.index = +params['index']; // Convert to number
      this.onClickListDiv(this.index);
      console.log(this.index);
    });
  }

  onClickListDiv(index:number){
    if(index === -1){return;}
    if(index > -1)this.isEditable = false;
    this.textFieldValue=TaskServiceService.dataList[index].title;
    this.textAreaValue=TaskServiceService.dataList[index].description;
    this.taskDate=TaskServiceService.dataList[index].date;
    console.log(index);
    console.log(TaskServiceService.dataList[index].title);
    // console.log(this.toShowField);
    }

  onClickEdit(){
    this.isEditable=true;
  }
  onClickUpdate(){
    if(this.index > -1){
      TaskServiceService.dataList[this.index].title = this.textFieldValue ;
      TaskServiceService.dataList[this.index].description=this.textAreaValue;
      TaskServiceService.dataList[this.index].date=this.taskDate;
      this.openSnackBar('Task Updated successfully', 'Close');
    }
    else{
      this.openSnackBar('Nothing to update', 'Close');
    }
  }

}
