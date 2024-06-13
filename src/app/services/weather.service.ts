import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';

  constructor(private http: HttpClient) { }

  getWeatherData(location: string): Observable<weatherData> {
    const url = '${this.apiUrl?q=${encodeURIComponent(cityName)}$appid=bbf82fd648msh0255fe8219b71b4p13d086jsnb79b8f3b8703';

    return this.http.get<weatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.xRapidApiHostHeaderName, environment.xRapidApiHostHeaderValue)
        .set(environment.xRapidApiKeyHeaderName, environment.xRapidApiKeyHeaderValue),
      params: new HttpParams()
        .set('q', 'cityName')
        .set('units', 'metric')
        .set('mode', 'json')
    }) 
  }
}
