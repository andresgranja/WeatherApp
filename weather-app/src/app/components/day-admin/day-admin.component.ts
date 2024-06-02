import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-day-admin',
  templateUrl: './day-admin.component.html',
  styleUrls: ['./day-admin.component.css']
})
export class DayAdminComponent {
  form = new FormGroup({});
  model = { city: '', days: 1 };
  fields: FormlyFieldConfig[] = [
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'City',
        placeholder: 'Enter a city name',
        required: true
      }
    },
    {
      key: 'days',
      type: 'select',
      templateOptions: {
        label: 'Choose days',
        options: [
          { value: 1, label: '1 day' },
          { value: 3, label: '3 days' },
          { value: 7, label: '1 week' }
        ],
        required: true
      }
    }
  ];
  forecastData: any;

  constructor(private weatherService: WeatherService) {}

  getForecast() {
    this.weatherService.getForecastWeather(this.model.city, this.model.days).subscribe(data => {
      this.forecastData = data;
    });
  }
}
