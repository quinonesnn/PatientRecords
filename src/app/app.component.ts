import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'patient-details-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'patient-details';

 
  sidebarExpanded: boolean = false;
  constructor(
  ) {
  }
}
