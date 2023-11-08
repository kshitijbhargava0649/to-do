import { Injectable } from '@angular/core';
import { DataListService } from './data-list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  static dataList: DataListService[]=[];

  insert(title:string,description:string,date:Date){
    console.log("Insert");
    TaskServiceService.dataList.push(new DataListService(title,description,date));
  }
  
  show(){
    for(let i=0;i<TaskServiceService.dataList.length;i++){
      console.log('Index',i);
      console.log('Title',TaskServiceService.dataList[i].title);
      console.log('Description',TaskServiceService.dataList[i].description);
      console.log('Date',TaskServiceService.dataList[i].date);
    }
  }
  constructor() { }
}
