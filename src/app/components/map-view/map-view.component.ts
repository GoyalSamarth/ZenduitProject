import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

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

// interface to define the structure of a marker object
interface Marker {
  position: google.maps.LatLngLiteral;
  label: string;
  title: string;
}
@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, MatListModule],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  @Input() submissions: Submission[] = []; // Get submissions as input from parent
  @ViewChild(GoogleMap) googleMap!: GoogleMap; // Reference to the Google Map component
  center: google.maps.LatLngLiteral = { lat: 43.6532, lng: -79.3832 }; // Default to Toronto
  zoom = 12;
  markers: Marker[] = [];

  constructor() {
    // Needed for Angular lifecycle
  }

  // Lifecycle hook that runs after the component is initialized
  ngOnInit() {
    // Map submissions to markers for display on the map
    this.markers = this.submissions.map(submission => ({
      position: { lat: submission.lat, lng: submission.lng },
      label: submission.task,
      title: submission.task
    }));
  }
// Method to handle map click events
  onMarkerClick(marker: Marker) {
    console.log('Marker clicked:', marker);
    
  }
 
}
