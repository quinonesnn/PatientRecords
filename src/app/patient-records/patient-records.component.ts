import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular'; // AG Grid Component
import { ColDef, GridApi } from 'ag-grid-community'; 

@Component({
  selector: 'patient-details-patient-records',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './patient-records.component.html',
  styleUrl: './patient-records.component.scss'
})
export class PatientRecordsComponent {
  gridApi: any;
  apiResponse: any = [
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

  columnDefs: ColDef[] = [
    { field: "name"},
    { field: "dob"},
    { field: "medication"},
    { field: "status"},
  ];
    

  onGridReady(params: any) {
    this.gridApi = params?.api;
  }
}
