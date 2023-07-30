import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from 'src/app/shared/api.service';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.css']
})
export class BlockViewComponent implements OnInit {
  currentWeather: Weather | undefined;
  checkWeather: Weather | undefined;
  sunMun : Weather | undefined;

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
        this.sunMun = data.forecast.forecastday[0].astro;
        // console.log(data)
      });
  }
}
