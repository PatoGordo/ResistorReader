import { Component, Input, OnInit } from '@angular/core';
import { resistorColors } from 'src/data/colors-information';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.scss'],
})
export class ResistorComponent implements OnInit {
  @Input() colors!: string[];

  public formatedColors: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.colors.forEach((color) => {
      this.formatedColors.push(resistorColors[color].hex);
    });
  }
}
