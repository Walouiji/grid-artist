import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridComponent } from "../grid/grid.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [GridComponent, FormsModule, CommonModule]
})
export class HomeComponent {
    colNumber: number = 5;
    rowNumber: number = 5;

    gridColor = [
        'white',
        'black',
        'red',
        'green',
        'blue',
        'yellow',
      ]
    selectedColor: number = 1;
}
