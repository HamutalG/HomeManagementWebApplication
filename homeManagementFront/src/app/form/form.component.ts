import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'addForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private addForm: FormGroup;

  constructor(private service: TasksService) {

    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      memberName: new FormControl('')
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    let fullTask = this.addForm.value;
    fullTask.isDone = false;

    this.service.addTask(fullTask).subscribe(response => {
      if (response.hasOwnProperty("err")) {
        alert('error!');
      } else {
        alert('Task Added Successfully');
        this.addForm.reset();
        this.service.eventEmitter.emit("added");
      };
    }, err => {
      alert('Error');
    })
  }

}
