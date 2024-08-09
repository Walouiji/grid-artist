import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {

  @Input()
  rows: number = 0;
  @Input()
  cols: number = 0;

  @Input()
  selectedColor: number = 1;

  @Input()
  grid: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  gridColor = [
    { color: 'white', value: 0 },
    { color: 'black', value: 1 }
  ]

  ngOnInit() {
    // this.generateGrid();
  }

  cellClicked(row: number, col: number) {
    console.log('selected color', this.selectedColor);
    const selectedColorObj = this.gridColor.find(x => x.value === this.selectedColor);
    if (selectedColorObj) {
      this.grid[row][col] = selectedColorObj.value;
    }
    console.log(this.grid);
  }
  
  generateGrid() {
    for(let i = 0; i < this.rows; i++) {
      this.grid.push([]);
      for(let j = 0; j < this.cols; j++) {
        this.grid[i].push(0);
      }
    }
  }
}
