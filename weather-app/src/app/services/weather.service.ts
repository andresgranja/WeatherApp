import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private ApiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.ApiUrl}/weather/current?city=${city}`;
    return this.http.get(url).pipe(map(response => response));
  }

  getForecastWeather(city: string, days: number): Observable<any> {
    const url = `${this.ApiUrl}/weather/forecast?city=${city}&days=${days}`;
    return this.http.get(url).pipe(map(response => response));
  }
}
