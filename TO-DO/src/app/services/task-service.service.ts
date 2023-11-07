import { Injectable } from '@angular/core';
import { DataListService } from './data-list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  dataList: DataListService[]=[];
  insert(title:string,description:string,date:Date){
    this.dataList.push(new DataListService(title,description,date));
  }
  show(){
    for(let i=0;i<this.dataList.length;i++){
      console.log('Index',i);
      console.log('Title',this.dataList[i].title);
      console.log('Description',this.dataList[i].description);
      console.log('Date',this.dataList[i].date);
    }
  }
  constructor() { }
}
