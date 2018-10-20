import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

const jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  eventEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public addTask(task: Task): Observable<Task> {

    return <Observable<Task>>this.http.post('http://localhost:3000/tasks/add', task, jsonHeader);

  }


  public showAll(): Observable<Task[]> {

    return <Observable<Task[]>>this.http.get('http://localhost:3000/tasks/showAll');

  }

  public showAllMembers(): Observable<Member[]> {

    return <Observable<Member[]>>this.http.get('http://localhost:3000/tasks/showAllMembers');

  }


  public deleteTask(_id): Observable<Task> {

    return <Observable<Task>>this.http.delete('http://localhost:3000/tasks/delete/?_id=' + _id, jsonHeader);

  }

  public updateTask(task): Observable<Task> {

    return <Observable<Task>>this.http.put('http://localhost:3000/tasks/update/?_id=' + task._id, task, jsonHeader);

  }
}
