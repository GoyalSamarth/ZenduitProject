import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';

// interface to define the structure of a submission object
interface Submission {
  task: string;
  status: string;
  from: string;
  to: string;
  address: string;
  dueDate: string;
  lat: number;
  lng: number;
}
@Component({
  selector: 'app-list-view',
  imports: [MatTableModule, MatPaginatorModule, MatChipsModule, CommonModule, MatCheckboxModule, MatIcon],
  standalone: true,
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  @Input() submissions: Submission[] = []; // Input property to receive submissions data
  displayedColumns: string[] = ['task', 'status', 'from', 'to', 'address', 'dueDate']; // Columns to display in the table
  
// Pagination-related variables
  currentPage = 1;
  pageSize = 10;
  totalSubmissions = 176; // Total number of submissions 

  // Calculate total pages
  get totalPages() {
    return Math.ceil(this.totalSubmissions / this.pageSize);
  }

  // Method to get visible pages for pagination
  get visiblePages() {
    const pages = [];
    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (this.currentPage > 3) pages.push('...');
      const start = Math.max(2, this.currentPage - 1);
      const end = Math.min(this.totalPages - 1, this.currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (this.currentPage < this.totalPages - 2) pages.push('...');
      pages.push(this.totalPages);
    }
    return pages;
  }

  // Method to go to a specific page
  goToPage(page: number | string) {
    if (typeof page === 'number'){
      this.currentPage = page;
    }
  }
   

  // Method to go to the previous page
  goToPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Method to go to the next page
  goToNext() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }


  // Method to get the class based on the status
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'low risk':
        return 'low-risk';
      case 'uncomplete':
        return 'uncomplete';
      case 'unassigned':
        return 'unassigned';
      case 'high risk':
        return 'high-risk';
      default:
        return '';
    }
  }
}
