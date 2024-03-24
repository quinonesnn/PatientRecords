import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PatientRecordsComponent } from './patient-records/patient-records.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
    },
    {        
        path: 'patients',
        component: PatientRecordsComponent,
    }
];
