import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'patient-details-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'patient-details';
}
