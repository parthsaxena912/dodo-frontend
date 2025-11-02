import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PensionerService, Pensioner } from '../pensioner';

@Component({
  selector: 'app-view-pensioner-correct',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>All Pensioners</h2>

      <table class="table table-bordered mt-3" *ngIf="pensioners.length > 0; else noData">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Aadhaar Number</th>
            <th>PAN Number</th>
            <th>Bank Name</th>
            <th>Account Number</th>
            <th>Pension Type</th>
            <th>Pension Amount</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let p of pensioners">
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.aadhaarNumber }}</td>
            <td>{{ p.panNumber }}</td>
            <td>{{ p.bankName }}</td>
            <td>{{ p.accountNumber }}</td>
            <td>{{ p.pensionType }}</td>
            <td>{{ p.pensionAmount }}</td>

            <td>
              <button class="btn btn-primary btn-sm" (click)="editPensioner(p.id)">✏️ Edit</button>
            </td>
          </tr>
        </tbody>
      </table>

      <ng-template #noData>
        <p>No pensioners found.</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 1000px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }

      h2 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 20px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        background-color: #f9f9f9;
      }

      th,
      td {
        padding: 12px;
        text-align: left;
        border: 1px solid #ddd;
      }

      th {
        background-color: #007bff;
        color: white;
        text-transform: uppercase;
        font-size: 14px;
      }

      tr:hover {
        background-color: #f1f1f1;
      }

      p {
        text-align: center;
        color: gray;
        margin-top: 20px;
      }
    `,
  ],
})
export class ViewPensionerCorrectComponent implements OnInit {
  pensioners: Pensioner[] = [];

  constructor(private pensionerService: PensionerService, private router: Router) {}

  ngOnInit(): void {
    this.loadPensioners();
  }

  // ✅ Fetch all pensioners from backend
  loadPensioners() {
    this.pensionerService.getAll().subscribe({
      next: (data) => {
        this.pensioners = data;
        console.log('Pensioners loaded:', data);
      },
      error: (err) => {
        console.error('Error fetching pensioners:', err);
      },
    });
  }

  // ✅ Navigate to edit page
  editPensioner(id: number | undefined) {
    if (!id) return;
    this.router.navigate(['/edit-pensioner', id]);
  }
}
