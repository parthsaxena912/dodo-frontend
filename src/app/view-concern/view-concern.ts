import { Component, OnInit } from '@angular/core';
import { ConcernService } from '../concern';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-concern',
  imports: [CommonModule],
  templateUrl: './view-concern.html',
  styleUrl: './view-concern.css',
})
export class ViewConcernsComponent implements OnInit {
  concerns: any[] = [];
  loading = false;

  constructor(private concernService: ConcernService) {}

  ngOnInit() {
    this.loadConcerns();
  }

  loadConcerns() {
    this.loading = true;
    this.concernService.getAllConcerns().subscribe({
      next: (data) => {
        this.concerns = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('❌ Failed to load concerns.');
      },
    });
  }

  updateStatus(id: number, status: string) {
    this.concernService.updateConcernStatus(id, status).subscribe({
      next: () => {
        alert(`✅ Concern marked as ${status}`);
        this.loadConcerns();
      },
      error: () => {
        alert('❌ Failed to update concern status.');
      },
    });
  }
}
