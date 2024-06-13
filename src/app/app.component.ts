import { Component, NgModule, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { weatherData } from './models/weather.model';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {
  }
  title = 'weather-app';
  // cityName: string = 'Nairobi';
  location: string = '';
  weatherData?: weatherData;
  errorMessage?:string;
  private searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300)).subscribe(cityName => {
      this.getWeatherData(cityName);
    });

    this.getWeatherData(this.location);
    this.location = '';

  }

  onSearchChange(location:string){
    this.searchSubject.next(location)
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.getWeatherData(this.location);
    this.location = '';
  }

  private getWeatherData(location: string) {
    this.weatherService.getWeatherData(location)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
         this.errorMessage=undefined;
        },
        error: (error) => {
          console.error('Error Fetching weather data:',error);
          this.errorMessage = 'Error fetching weather data. Please try again.'
        }
      });

  }
}
