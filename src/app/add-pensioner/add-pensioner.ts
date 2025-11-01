import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-pensioner',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="container mt-4">
      <h2>Add Pensioner</h2>
      <form (ngSubmit)="addPensioner()">
        <label>Name:</label>
        <input type="text" [(ngModel)]="pensioner.name" name="name" class="form-control" required />

        <label>Aadhar Number:</label>
        <input
          type="text"
          [(ngModel)]="pensioner.aadharNumber"
          name="aadhar"
          class="form-control"
          required
        />

        <label>Bank Name:</label>
        <input
          type="text"
          [(ngModel)]="pensioner.bankName"
          name="bank"
          class="form-control"
          required
        />

        <label>Account Number:</label>
        <input
          type="text"
          [(ngModel)]="pensioner.accountNumber"
          name="account"
          class="form-control"
          required
        />

        <label>Pension Amount:</label>
        <input
          type="number"
          [(ngModel)]="pensioner.pensionAmount"
          name="amount"
          class="form-control"
          required
        />

        <button type="submit" class="btn btn-success mt-3">Add Pensioner</button>
      </form>
    </div>
  `,
})
export class AddPensionerComponent {
  pensioner = {
    name: '',
    aadharNumber: '',
    bankName: '',
    accountNumber: '',
    pensionAmount: 0,
  };

  constructor(private http: HttpClient) {}

  addPensioner() {
    this.http.post('http://localhost:8080/api/pensioners', this.pensioner).subscribe({
      next: (res) => {
        alert('Pensioner added successfully!');
        this.pensioner = {
          name: '',
          aadharNumber: '',
          bankName: '',
          accountNumber: '',
          pensionAmount: 0,
        };
      },
      error: (err) => alert('Error adding pensioner: ' + err.message),
    });
  }
}
