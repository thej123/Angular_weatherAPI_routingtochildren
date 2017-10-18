import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  humidity;
  temp;
  tempMax;
  tempMin;
  status;


  constructor(private _taskService: TaskService) {
    this._taskService.retrieveTasks("dallas", (a, b, c, d, e) => {
      this.humidity = a;
      this.temp = b;
      this.tempMax = c;
      this.tempMin = d;
      this.status = e;
    })
    console.log("hi")
  }

  ngOnInit() {
  }

}
