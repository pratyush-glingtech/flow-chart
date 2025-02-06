import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css'],
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule]
})
export class GridsComponent {
  outerGridSize: number = 20; // Fixed outer grid size (20x20)
  innerGridSize: number = 4;  // Fixed inner grid size (4x4)
  cellSize: number = 13; // Default size of inner grid cells in pixels
  items: number[] = [];
  innerGridItems: number[] = [];
  yamlInput: string = '';

  constructor() {
    this.generateGrid();
    this.generateInnerGridItems();
  }

  // Generate grid based on user input
  generateGrid() {
    const totalBlocks = this.outerGridSize * this.outerGridSize;
    this.items = Array.from({ length: totalBlocks }, (_, i) => i + 1);
  }

  // Update grid when user changes the input
  updateCellSize(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const size = parseInt(input, 10);
    if (size && size > 0) {
      this.cellSize = size;
    }
  }

  generateInnerGridItems() {
    const totalInnerItems = this.innerGridSize * this.innerGridSize;
    this.innerGridItems = Array.from({ length: totalInnerItems }, (_, i) => i + 1);
  }

  downloadYaml() {
    if (!this.yamlInput.trim()) {
      alert("Please enter some data before downloading.");
      return;
    }

    // Create YAML content dynamically
    const yamlContent = `data:\n  user_input: "${this.yamlInput}"\n  grid:\n    outer_size: ${this.outerGridSize}\n    inner_size: ${this.innerGridSize}\n    cell_size: ${this.cellSize}`;

    // Create a Blob object from YAML string
    const blob = new Blob([yamlContent], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);

    // Create and trigger download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated.yaml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
}