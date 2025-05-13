import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapViewComponent } from '../map-view/map-view.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
@Component({
  selector: 'app-submissions',
  imports: [CommonModule, FormsModule, MatFormFieldModule , MapViewComponent, ListViewComponent, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatIconModule, MatButtonToggleModule, MatInputModule],
  standalone: true,
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent {
  currentView: 'map' | 'list' = 'list';

  selectedForm = '';
  selectedStatus = '';
  selectedDate: Date = new Date('2020-12-24');
  searchQuery = '';

  forms = ['Form A', 'Form B', 'Form C'];
  statuses = ['All','Low Risk', 'Uncomplete', 'Unassigned', 'High Risk'];

  // Mock data for submissions
  mockSubmissions = [
  {
    task: 'Work Flow: Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    address: '123 Main St, Toronto, ON',
    dueDate: 'Oct 6, 2020, 02:38 AM',
    lat: 43.65107,
    lng: -79.347015
  },
  {
    task: 'Work Flow: Requires Location',
    status: 'Uncomplete',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    address: '456 Queen St W, Toronto, ON',
    dueDate: 'Oct 8, 2020, 11:15 AM',
    lat: 43.6475,
    lng: -79.395
  },
  {
    task: 'Work Flow: Requires Location',
    status: 'Unassigned',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    address: '789 Bloor St W, Toronto, ON',
    dueDate: 'Oct 9, 2020, 02:00 PM',
    lat: 43.6616,
    lng: -79.4293
  },
  {
    task: 'Work Flow: Requires Location',
    status: 'Unassigned',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    address: '1001 King St W, Toronto, ON',
    dueDate: 'Oct 10, 2020, 04:45 PM',
    lat: 43.6396,
    lng: -79.4187
  },
  {
    task: 'Work Flow: Requires Location',
    status: 'High Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    address: '250 Dundas St W, Toronto, ON',
    dueDate: 'Oct 11, 2020, 08:30 AM',
    lat: 43.6555,
    lng: -79.389
  },
  {
    task: 'Work Flow: Requires Location',
    status: 'Uncomplete',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    address: '360 College St, Toronto, ON',
    dueDate: 'Oct 12, 2020, 06:15 PM',
    lat: 43.6567,
    lng: -79.4068
  }
]
;
  
  get filteredSubmissions() {
  let submissions = this.mockSubmissions;

  // Apply status filter
  if (this.selectedStatus && this.selectedStatus !== 'All') {
    submissions = submissions.filter(
      sub => sub.status.toLowerCase() === this.selectedStatus.toLowerCase()
    );
  }

  // Apply search filter
  if (this.searchQuery) {
    const lowerQuery = this.searchQuery.toLowerCase();
    submissions = submissions.filter(sub =>
      sub.task.toLowerCase().includes(lowerQuery) ||
      sub.status.toLowerCase().includes(lowerQuery) ||
      sub.from.toLowerCase().includes(lowerQuery) ||
      sub.to.toLowerCase().includes(lowerQuery) ||
      sub.address.toLowerCase().includes(lowerQuery)
    );
  }

  return submissions;
}

  // export data method
  exportData() {
    alert('Exporting data...');
  }

  // toggle view method
  toggleView(view: 'map' | 'list') {
    this.currentView = view;
  }
}