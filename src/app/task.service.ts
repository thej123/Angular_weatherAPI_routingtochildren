import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }
  
  retrieveTasks(id, callone){
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=9a217cd2db7052d1ca6305c75a5d7297&units=metric`).subscribe(
      (response) => {
        callone(response.json().main.humidity, response.json().main.temp, response.json().main.temp_max, response.json().main.temp_min, response.json().weather[0].description)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
