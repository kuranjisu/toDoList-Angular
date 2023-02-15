import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TASKS } from 'src/app/models/sampletasks';

@Component({
  selector: 'app-tasks', // css element selector
  templateUrl: './tasks.component.html', // locaton of components template file (html file)
  styleUrls: ['./tasks.component.css'] // location of css styles
})
export class TasksComponent {
  tasks = TASKS;
  newTaskTitle = '';
  hideSelected = false;

  addTask() {
    this.tasks.push({title: this.newTaskTitle, isChecked: false});
    this.newTaskTitle = '';
  }
  
  onClickToggle() {
    this.hideSelected = !this.hideSelected;
  }
}