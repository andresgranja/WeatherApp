import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-admin',
  templateUrl: './weather-admin.component.html',
  styleUrls: ['./weather-admin.component.css']
})
export class WeatherAdminComponent {
  form = new FormGroup({});
  model = { city: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'City',
        placeholder: 'Enter a city name',
        required: true
      }
    }
  ];
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getCurrentWeather(this.model.city).subscribe(data => {
      console.log(data);
      this.weatherData = data;
    });
  }
}
