import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  encapsulation  :ViewEncapsulation.ShadowDom
})
export class HomeSliderComponent {
  slides = [
    '../../assets/slide/slider1.jpg' ,
    '../../assets/slide/slider2.jpg' ,
    '../../assets/slide/slider3.jpg' ,
  ]
  config : SwiperOptions = {
    slidesPerView : 1,
    direction : 'horizontal',
    pagination: { clickable: true }
  };
  constructor(){}
  ngOnInit():void{}
}
