import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  weatherData:any;
  imgUrl: any;

 

  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
  
    
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=aed63afeb534544007b00985fbdba5f1&q=gießen&units=metric')
    .then(response=>response.json())
    .then(data=>{this.setWeatherdata(data);})
    //"https://api.openweathermap.org/data/2.5/weather?appid=aed63afeb534544007b00985fbdba5f1&q=gießen&units=metric"
  }

  
  setWeatherdata(data:any){
    this.weatherData=data;
    let img =this.weatherData.weather[0].icon;
    this.imgUrl = "http://openweathermap.org/img/wn/" + img + "@2x.png";
  }

}
