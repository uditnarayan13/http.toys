import { Component, OnInit } from '@angular/core';
import { WeatherServiceComponent } from 'src/app/services/weather-service/weather-service.component';
import {WeatherData} from '../../models/weather.model'
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit{

  constructor(private weatherService : WeatherServiceComponent){

  }


  weatherData?: WeatherData;
  cityName: string ='Delhi'

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    
}

private getWeatherData(cityName:string){
  this.weatherService.getWeatherData(cityName).subscribe({
    next: (response)=>{
      this.weatherData = response
      console.log(response);
    }
  })
}

onSubmit(){
this.getWeatherData(this.cityName);
}
}
