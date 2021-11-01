import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    const source = interval(600000);
    
    fetch(this.url)
    .then((response)=>{
      return response.json();
    })
    .then((myJson)=>{
      this.data = myJson;
      this.temp = (myJson.main.temp - 273).toFixed(0);
      this.feelLikeTemp = (myJson.main.feels_like - 273).toFixed(0);
      // console.log(this.data); // проверка получения данных по ссылочке
      
      const subscribe = source.subscribe(val => {
      this.temp = (myJson.main.temp - 273).toFixed(0);
      this.feelLikeTemp = (myJson.main.feels_like - 273).toFixed(0);
      console.log(val);
      
      }); //Обновление данных через 10 min
      
    })
  
  }
  exit(){
    localStorage.clear();
    this.router.navigate([''])

  }
  data ='';
  temp: any;
  feelLikeTemp :any;
  apiKey = `bc5b007aa7c41ae1b4703074da2f44aa`;
  userName = localStorage.getItem('name');
  userSity = localStorage.getItem('city');
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.userSity}&appid=${this.apiKey}`
  

  logInfo(){
       console.log(`Welcome ${this.userName}`);
  }
  
}
