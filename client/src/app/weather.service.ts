import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherObservable(city: string) {
    return this.http.get<any>(environment.apiUrl + '/weather/' + city);
  }

  getCustomWeatherObservable(city: string, temperatureScale: 'C' | 'F') {
    return this.http.post<any>(environment.apiUrl + '/weather', {city, temperatureScale});
  }
}
