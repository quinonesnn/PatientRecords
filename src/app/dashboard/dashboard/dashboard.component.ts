import { Component } from '@angular/core';

@Component({
  selector: 'patient-details-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  sidebarExpanded: boolean = true;
  constructor(
  ) {
  }
}
