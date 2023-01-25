import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  weather : any ;
  city : any ;
  temp!: number;
  constructor (private weatherService : WeatherService){ }
  
  ngOnInit(): void {
    this.getWeather();
  }
  getWeather(){
    this.weatherService.getWeather().subscribe(index => {
      this.weather = index;
      this.temp = this.weather['main']['temp'];
      this.city = this.weather['name'];
    })
  }
}
