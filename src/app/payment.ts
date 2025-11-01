import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  createOrder(amount: number) {
    return this.http.post<any>('/api/payment/create-order', { amount });
  }

  verifyPayment(paymentDetails: any) {
    return this.http.post<any>('/api/payment/verify', paymentDetails);
  }
}
