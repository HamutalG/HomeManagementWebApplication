import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { Member } from '../models/member';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasksArr: Task[] = [];
  membersArr: Member[] = [];

  constructor(private service: TasksService) { }

  ngOnInit() {
    this.getTasks();
    this.service.eventEmitter.subscribe(data => {
      if (data == "added" || data == "delete" || data == "update") {
        this.getTasks();
      }
    });

    this.getMembers();

    /*setTimeout(() => {
       console.log(this.tasksArr);
     }, 200)*/
  }

  getTasks() {
    this.service.showAll().subscribe(result => {
      this.tasksArr = result;
    });
  }

  getMembers() {
    this.service.showAllMembers().subscribe(result => {
      this.membersArr = result;
    });
  }

}
