import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from 'src/app/shared/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentWeather: Weather | undefined;
  checkWeather: Weather | undefined;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  onInputChange(): void {
      this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.weatherService.fetchWeather()
      .subscribe((data: any) => {
        this.currentWeather = data.location;
        this.checkWeather = data.current;
        // console.log(data)
      });
  }

  roundToInteger(num: number): number {
    return Math.round(num);
  }
}