import { Component, OnInit } from '@angular/core';
import { WeatherService} from 'src/app/shared/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  public cityName: string = '';
  public hasError: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.hasError.subscribe((error) => {
      this.hasError = error; 
    });
    // this.onInputChange(); 
  }

  onInputChange() {
    this.weatherService.updateCity(this.cityName);
    this.cityName = '';
  }
}