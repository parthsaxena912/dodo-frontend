import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-concern',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './admin-concern.html',
  styleUrl: './admin-concern.css',
})
export class AdminConcernsComponent implements OnInit {
  concerns: any[] = [];
  apiUrl = 'http://localhost:8080/api/concerns';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadConcerns();
  }

  loadConcerns() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => (this.concerns = data),
      error: (err) => console.error('Error fetching concerns', err),
    });
  }

  updateStatus(concernId: number, status: string) {
    this.http.patch(`${this.apiUrl}/${concernId}/status?status=${status}`, {}).subscribe({
      next: () => {
        alert(`Status updated to ${status}`);
        this.loadConcerns();
      },
      error: (err) => console.error('Error updating status', err),
    });
  }
}
