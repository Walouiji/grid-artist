import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  @Input()
  rows: number = 0;
  @Input()
  cols: number = 0;

  @Input()
  selectedColor: number = 1;

  grid: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  gridColor = [
    'white',
    'black',
    'red',
    'green',
    'blue',
    'yellow',
  ]

  cellClicked(row: number, col: number) {
    this.grid[row][col] = this.selectedColor;
  }

  cellSize = 100;

  download() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    const canvasWidth = this.grid[0].length * this.cellSize;
    const canvasHeight = this.grid.length * this.cellSize;

    this.canvas.nativeElement.width = canvasWidth;
    this.canvas.nativeElement.height = canvasHeight;

    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[row].length; col++) {
        const colorIndex = this.grid[row][col];
        const color = this.gridColor[colorIndex];
        if(ctx) {
          ctx.fillStyle = color;
          ctx.fillRect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
        }
      }
    }

    const imageData = this.canvas.nativeElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'grid_art.png';
    link.click();
  }

}
