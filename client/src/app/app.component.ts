import { Component } from '@angular/core';

import { WeatherService } from './weather.service';
import { weatherObjectModel } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weatherObject: weatherObjectModel | undefined = undefined;
  title = 'client';

  constructor(
    private weatherService: WeatherService
  ) { }


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
