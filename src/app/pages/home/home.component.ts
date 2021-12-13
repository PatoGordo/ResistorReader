import { Component, OnInit } from '@angular/core';
import {
  resistorColors,
  resistorColorsInArray,
} from 'src/data/colors-information';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public resistorResistence = 0;

  public colors = ['blue', 'violet', 'black', 'silver'];
  public resistorColorsInArray = resistorColorsInArray;

  constructor() {}

  ngOnInit() {}

  public markAsSelected(
    color: string,
    line: 'first' | 'second' | 'third' | 'fourth'
  ) {
    if (line === 'first') {
      this.colors[0] = color;
    }
    if (line === 'second') {
      this.colors[1] = color;
    }
    if (line === 'third') {
      this.colors[2] = color;
    }
    if (line === 'fourth') {
      this.colors[3] = color;
    }

    const div = document.querySelector(`#${line}`);
    div?.querySelector('.selected')?.classList.remove('selected');
  }

  public resistorColorsDecode() {
    let ohmResistence = '';

    this.colors.forEach((color, index) => {
      if (index === 0) {
        ohmResistence += resistorColors[color].lines;
        document
          .querySelector(`.fisrt-line-color-${color}`)
          ?.classList.add('selected');
      }
      if (index === 1) {
        ohmResistence += resistorColors[color].lines;
        document
          .querySelector(`.second-line-color-${color}`)
          ?.classList.add('selected');
      }
      if (index === 2) {
        document
          .querySelector(`.third-line-color-${color}`)
          ?.classList.add('selected');
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
        for (let i = 0; i < resistorColors[color].lines; i++) {
          ohmResistence += 0;
        }
      }
      if (index === 3) {
        ohmResistence += `Ω ±${resistorColors[color].tolerance}%`;
        document
          .querySelector(`.fourth-line-color-${color}`)
          ?.classList.add('selected');
      }
    });

    return ohmResistence;
  }
}
