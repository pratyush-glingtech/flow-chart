import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css'],
  imports: [MatInputModule, MatFormFieldModule]
})
export class GridsComponent {
  gridSize: number = 3; // Default 3x3 grid
  items: number[] = [];

  constructor() {
    this.generateGrid();
  }

  // Generate grid based on user input
  generateGrid() {
    const totalBlocks = this.gridSize * this.gridSize;
    this.items = Array.from({ length: totalBlocks }, (_, i) => i + 1);
  }

  // Update grid when user changes the input
  updateGridSize(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const size = parseInt(input, 10);
    if (size && size > 0) {
      this.gridSize = size;
      this.generateGrid();
    }
  }
}

