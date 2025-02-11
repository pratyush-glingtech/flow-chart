import { Component } from '@angular/core';
import { GridsComponent } from '../grids/grids.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { ControlPanelComponent } from '../control-panel/control-panel.component';

@Component({
  selector: 'app-sidebar',
  imports: [ MatIconModule, MatToolbarModule, MatSidenavModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
}
