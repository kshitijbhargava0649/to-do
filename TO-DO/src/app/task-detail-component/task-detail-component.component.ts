import { Component } from '@angular/core';

@Component({
  selector: 'task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent {
  textFieldValue: string='';
  textAreaValue: string='';
}
