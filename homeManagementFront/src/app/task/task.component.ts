import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  constructor(private service: TasksService) { }

  ngOnInit() {
  }

  deleteTask(e) {
    this.service.deleteTask(this.task._id).subscribe(data => {
      if (!data.hasOwnProperty("err")) {
        alert("Task Deleted");
        this.service.eventEmitter.emit("delete");
      }
    })
  }

  updateTask(e) {
    this.task.isDone = e.path[0].checked;

    this.service.updateTask(this.task).subscribe(data => {

      if (!data.hasOwnProperty("err")) {
        alert("Task Updated");
        this.service.eventEmitter.emit("update");
      }
    });
  }

}
