import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  humidity;
  temp;
  tempMax;
  tempMin;
  status;


  constructor(private _taskService: TaskService) {
    this._taskService.retrieveTasks("chicago", (a, b, c, d, e) => {
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
