import { Component, signal } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-sidebar-categories',
  imports: [MaterialModule],
  templateUrl: './sidebar-categories.component.html',
  styleUrl: './sidebar-categories.component.css'
})
export class SidebarCategoriesComponent {
  readonly panelOpenState = signal(false);
  categories: { [key: string]: string[] }  = {
    "Control Operators": ["condition", "apply_to_each", "do_until", "scope", "switch", "terminate"], "Variables Operators": ["append_to_array", "append_to_string", "merge_array", "decrement", "increment", "initializer", "set_var"], 
    "Web Operators": ["existence", "click", "write", "extract_data", "css_property", "visibility"], 
    "Browser Operators": ["window_resize", "load"], 
    "System Operators": ["wait"]
  }

  get keys() {
    return Object.keys(this.categories);
  }

  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
