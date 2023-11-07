import { Injectable , Inject} from '@angular/core';
import { TaskServiceService } from './task-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
  constructor(@Inject('title') title: string, @Inject('description') description: string, @Inject('date') date: Date){
    this.title=title;
    this.description=description;
    this.date=date;
  }
  public title: string;
  public description: string;
  public date: Date;
}
