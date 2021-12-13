import { Component, Input, OnInit } from '@angular/core';
import { resistorColors } from 'src/data/colors-information';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.scss'],
})
export class ResistorComponent implements OnInit {
  @Input()
  colors!: string[];

  public resistorColors = resistorColors;

  constructor() {}

  ngOnInit(): void {}
}
