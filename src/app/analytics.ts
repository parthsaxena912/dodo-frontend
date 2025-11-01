import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

// This interface must match your backend DTO (Spring Boot)
export interface AnalyticsData {
  totalPensionPaid: number;
  pensionersPaid: number;
  averagePension: number;
  remainingPensioners: number;
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  // 👇 Update the URL if your backend runs on a different port or path
  private apiUrl = 'http://localhost:8080/api/pension-records/analytics';

  constructor(private http: HttpClient) {}

  /**
   * Fetch pension analytics data from backend API
   */
  getAnalytics(): Observable<AnalyticsData> {
    return this.http.get<AnalyticsData>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching analytics data:', error);
        return throwError(() => new Error('Unable to fetch analytics data from server'));
      })
    );
  }
}
