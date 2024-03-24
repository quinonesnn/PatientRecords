import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LandingComponent } from './landing/landing.component';
import { PatientRecordsComponent } from './patient-records/patient-records.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  {
    path: "",
    component : DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard/landing",
        pathMatch: "full",
      },
      {
        path: "landing",
        component: LandingComponent,
      },
      {
				path: "patients",
				component: PatientRecordsComponent,
			},
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent,
    SideBarComponent,
    PatientRecordsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbHighlight,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      routes
    ),
  ]
})
export class DashboardModule { }
