import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-service',
  templateUrl: './weather-service.component.html',
  styleUrls: ['./weather-service.component.css']
})
export class WeatherServiceComponent {

  private weatherUrl = 'https://open-weather13.p.rapidapi.com/city';
  private weatherApiRapidHostHeaderName='X-RapidAPI-Host';
  private weatherApiHostHeaderValue='open-weather13.p.rapidapi.com';  
  private weatherApiRapidHostHeaderKey='X-RapidAPI-Key';
  private weatherApiHostHeaderKeyValue='9002014183mshcb1615ab39fdd03p11b8bfjsnad7fff7c53ff';

  constructor(private httpClient : HttpClient){}

  getWeatherData(cityName: string){

    return this.httpClient.get<WeatherData>(this.weatherUrl+'/'+cityName,{
      headers: new HttpHeaders().set(this.weatherApiRapidHostHeaderName, this.weatherApiHostHeaderValue).set(this.weatherApiRapidHostHeaderKey,this.weatherApiHostHeaderKeyValue)
    })
  }

}
