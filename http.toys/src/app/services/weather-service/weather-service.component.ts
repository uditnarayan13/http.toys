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
  private weatherApiHostHeaderValue='your-header-value';  
  private weatherApiRapidHostHeaderKey='X-RapidAPI-Key';
  private weatherApiHostHeaderKeyValue='your-key-value';

  constructor(private httpClient : HttpClient){}

  getWeatherData(cityName: string){

    return this.httpClient.get<WeatherData>(this.weatherUrl+'/'+cityName,{
      headers: new HttpHeaders().set(this.weatherApiRapidHostHeaderName, this.weatherApiHostHeaderValue).set(this.weatherApiRapidHostHeaderKey,this.weatherApiHostHeaderKeyValue)
    })
  }

}
