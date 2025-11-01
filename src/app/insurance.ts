import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface InsuranceApplication {
  id?: number;
  userId: number;
  insuranceType: string;
  status?: string;
  appliedAt?: string;
  remarks?: string;
}

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // User applies for insurance
  applyForInsurance(application: InsuranceApplication): Observable<InsuranceApplication> {
    return this.http.post<InsuranceApplication>(`${this.apiUrl}/apply`, application);
  }

  // Get all applications (Admin)
  getAllApplications(): Observable<InsuranceApplication[]> {
    return this.http.get<InsuranceApplication[]>(`${this.apiUrl}/all`);
  }

  // Get applications by user ID
  getApplicationsByUser(userId: number): Observable<InsuranceApplication[]> {
    return this.http.get<InsuranceApplication[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Update application status (Admin)
  updateStatus(id: number, status: string): Observable<InsuranceApplication> {
    return this.http.put<InsuranceApplication>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }
}
