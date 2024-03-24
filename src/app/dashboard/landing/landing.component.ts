import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'patient-details-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
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

  constructor(
    private fb: FormBuilder
  ) { 
    this.filter = this.fb.control("", { nonNullable: true });
  }
}
