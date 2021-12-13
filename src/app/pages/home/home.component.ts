import { Component, OnInit } from '@angular/core';
import { resistorColors } from 'src/data/colors-information';

type colorsOptions = {
  [key: string]: {
    lines: number;
    tolerance: number;
  };
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public resistorResistence = 0;

  public colors = ['blue', 'violet', 'red', 'silver'];

  constructor() {}

  ngOnInit(): void {}

  public resistorColorsDecode() {
    let ohmResistence = '';

    this.colors.forEach((color, index) => {
      if (index === 0) {
        ohmResistence += resistorColors[color].lines;
      }
      if (index === 1) {
        ohmResistence += resistorColors[color].lines;
      }
      if (index === 2) {
        if (color === 'black') {
          return;
        }
        if (color === 'silver') {
          ohmResistence = `0.${String([...ohmResistence]).replace(',', '')}`;
          return;
        }
        if (color === 'gold') {
          ohmResistence = `${ohmResistence[0]}.${ohmResistence.substring(1)}`;
          return;
        }
        for (let i = 0; i <= resistorColors[color].lines; i++) {
          ohmResistence += 0;
        }
      }
      if (index === 3) {
        ohmResistence += `Ω ±${resistorColors[color].tolerance}%`;
      }
    });

    return ohmResistence;
  }
}
