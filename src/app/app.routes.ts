import { Routes } from '@angular/router';
import { SubmissionsComponent } from './components/submissions/submissions.component';

export const routes: Routes = [
  { path: '', component: SubmissionsComponent },
  { path: '**', redirectTo: '' }
];
