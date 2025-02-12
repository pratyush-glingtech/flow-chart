import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridsComponent } from "./grids/grids.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [GridsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flow_chart';
}
