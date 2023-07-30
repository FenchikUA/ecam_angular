import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Weather {
  name: string,
  region: string,
  country: string,
  cloud: number,
  temp_c: number,
  wind_mph: number,
  feelslike_c: number,
  humidity: number,
  uv: number,
  time: any,
  temperature:any,
  weatherIcon: string,
  maxtemp_c: number,
  mintemp_c: number,
  date: string,
  day: any,
  sunrise: string,
  moonrise:string,
  condition: {
    text: string,
    icon: string
  }
}

@Injectable({ providedIn: 'root' })

export class WeatherService {
  public location: Weather[] = []
  private apiKey: string = "c550093221f84e66b28191150232901";
  private citySubject: Subject<string> = new Subject<string>();
  public hasError: Subject<boolean> = new Subject<boolean>();

  constructor(public http: HttpClient) { }

  updateCity(city: string): void {
    if (city.trim() === '') {
      console.error('Invalid city name');
      return;
    }
    this.citySubject.next(city);
  }

  fetchWeather(): Observable<Weather[]> {
    return this.citySubject.pipe(
      switchMap((city: string) => {
        const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
        return this.http.get<Weather[]>(apiUrl).pipe(
          catchError((error) => {
            if (error.status === 400) {
              console.error('Bad Request:', error);
              this.hasError.next(true); 
              setTimeout(() => location.reload(), 200);
            }
            return of([]);
          })
        );
      })
    );
  }
}
