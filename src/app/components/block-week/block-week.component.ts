import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from 'src/app/shared/api.service';

@Component({
  selector: 'app-block-week',
  templateUrl: './block-week.component.html',
  styleUrls: ['./block-week.component.css']
})
export class BlockWeekComponent implements OnInit {

  forecastWeek: Weather[] | undefined

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
        this.forecastWeek = data.forecast.forecastday;
        console.log(this.forecastWeek)
      });
  }

  roundToInteger(num: number): number {
    return Math.round(num);
  }
}
