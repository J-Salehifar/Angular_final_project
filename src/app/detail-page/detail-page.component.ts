import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit{
  weather : any ;
  icon :any;
  city : any ;
  temp!: number;
  temp_max : any ;
  temp_min : any ;
  feels_like : any ;
  humidity : any ;
  pressure : any ;
  description : any
  wind: any;
  constructor (private weatherService : WeatherService){ }
  
  ngOnInit(): void {
    this.getWeather();
  }
  
  getWeather(){
    this.weatherService.getWeather().subscribe(index => {
      this.weather = index;
      console.log(this.weather)
      this.description = this.weather['weather'][0]['description']
      this.city = this.weather['name'];    
      this.temp = this.weather['main']['temp'];
      this.temp_max = this.weather['main']['temp_max'];
      this.temp_min = this.weather['main']['temp_min'];
      this.feels_like = this.weather['main']['feels_like'];
      this.wind = this.weather['wind']['speed'];
      this.humidity = this.weather['main']['humidity'];
      this.pressure = this.weather['main']['pressure'];
    })
  }
}
