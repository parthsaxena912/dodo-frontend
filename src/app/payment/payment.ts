// src/app/components/admin/payment/payment.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="payment-wrapper">
      <div class="payment-card">
        <h2>💸 Send Pension Payment</h2>

        <div class="form-group">
          <label for="pensioner">Select Pensioner:</label>
          <select id="pensioner" [(ngModel)]="selectedPensioner">
            <option [ngValue]="null" disabled selected>Select a Pensioner</option>
            <option *ngFor="let p of pensioners" [ngValue]="p">{{ p.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="amount">Amount (INR):</label>
          <input id="amount" type="number" [(ngModel)]="amount" placeholder="Enter amount in ₹" />
        </div>

        <button (click)="pay()" [disabled]="!selectedPensioner || !amount">Pay Now</button>
      </div>
    </div>
  `,
  styles: [
    `
      .payment-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #007bff, #0056b3); /* Login-like blue gradient */
      }

      .payment-card {
        background: #ffffff;
        padding: 30px 40px;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        width: 400px;
        max-width: 90%;
        text-align: center;
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .payment-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
      }

      h2 {
        color: #007bff;
        margin-bottom: 25px;
        font-size: 1.8rem;
      }

      .form-group {
        margin-bottom: 20px;
        text-align: left;
      }

      label {
        display: block;
        font-weight: 500;
        margin-bottom: 8px;
      }

      select,
      input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid #ccc;
        font-size: 1rem;
        outline: none;
        transition: border 0.3s, box-shadow 0.3s;
      }

      select:focus,
      input:focus {
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
      }

      button {
        width: 100%;
        padding: 12px 0;
        font-size: 1.1rem;
        font-weight: 500;
        border: none;
        border-radius: 12px;
        background: #007bff;
        color: #fff;
        cursor: pointer;
        transition: background 0.3s, transform 0.2s;
      }

      button:hover {
        background: #0056b3;
        transform: translateY(-2px);
      }

      button:disabled {
        background: #a0c0ff;
        cursor: not-allowed;
      }
    `,
  ],
})
export class PaymentComponent implements OnInit {
  pensioners: any[] = [];
  selectedPensioner: any = null;
  amount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/pensioners').subscribe(
      (data) => {
        this.pensioners = data;
      },
      (error) => {
        console.error('Error fetching pensioners:', error);
      }
    );
  }

  pay() {
    if (!this.selectedPensioner) {
      alert('Please select a pensioner!');
      return;
    }

    if (!this.amount || this.amount <= 0) {
      alert('Enter a valid amount!');
      return;
    }

    const options = {
      key: 'rzp_test_RXpXGIPtQmUHF6',
      amount: this.amount * 100,
      currency: 'INR',
      name: this.selectedPensioner.name,
      description: 'Pension Payment',
      handler: (response: any) => {
        alert(`Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);

        this.http
          .post('http://localhost:8080/api/payments', {
            pensionerId: this.selectedPensioner.id,
            amount: this.amount,
            razorpayPaymentId: response.razorpay_payment_id,
          })
          .subscribe(() => console.log('Payment recorded in backend.'));
      },
      prefill: {
        name: this.selectedPensioner.name,
        email: this.selectedPensioner.email,
      },
      theme: { color: '#007bff' },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
