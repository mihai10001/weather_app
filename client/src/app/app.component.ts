import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WeatherService } from './weather.service';
import { weatherObjectModel } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weatherObject: weatherObjectModel | undefined = undefined;
  searchCity = new FormControl('');

  constructor(
    private weatherService: WeatherService
  ) { }

  onSearch() {
    if (!this.searchCity.value)
      return;
    
    this.getWeather(this.searchCity.value);
  }

  getWeather(city: string) {
    this.weatherService
      .getWeatherObservable(city)
      .subscribe(weather => {
          this.weatherObject = weather as weatherObjectModel;
        }, (error) => {
          this.weatherObject = undefined;
          console.log(error);
        }
      );
  }
}
