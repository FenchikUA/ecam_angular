import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from 'src/app/shared/api.service';

@Component({
  selector: 'app-block-time',
  templateUrl: './block-time.component.html',
  styleUrls: ['./block-time.component.css']
})
export class BlockTimeComponent implements OnInit {
  forecastData: Weather[] | undefined;

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
        const hourlyForecast = data.forecast.forecastday[0].hour;
        this.forecastData = hourlyForecast.filter((hourData: any) => {
          const time = hourData.time.split(' ')[1]; 
          return time === '06:00' || time === '09:00' || time === '12:00' || time === '15:00' || time === '18:00' || time === '21:00';
        }).map((hourData: any) => ({
          time: hourData.time,
          weatherIcon: hourData.condition.icon,
          temperature: hourData.temp_c
        }));
        // console.log(this.forecastData);
      });
  }
}
