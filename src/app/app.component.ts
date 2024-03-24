import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'patient-details-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NgbHighlight, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'patient-details';
  filter: FormControl;
  patients: Array<any> = [
    {
      "name": "Nick Quinones",
      "dob": "08/25/2001",
      "medication": "Paxlovid",
      "status": 1
    },
    {
      "name": "Sandra Nunez",
      "dob": "05/23/1973",
      "medication": "Gemtesa",
      "status": 1
    },
    {
      "name": "Jorge Quinones",
      "dob": "02/16/1974",
      "medication": "Gilead",
      "status": 1
    },
    {
      "name": "Jacobo Quinones",
      "dob": "03/17/2003",
      "medication": "NovoRare",
      "status": 1
    },
    {
      "name": "Juan Lombana",
      "dob": "04/02/1991",
      "medication": "Madrigal",
      "status": 1
    }
  ];
 
  sidebarExpanded: boolean = false;
  constructor(
    private fb: FormBuilder
  ) {
    this.filter = this.fb.control("", { nonNullable: true });
  }
}
