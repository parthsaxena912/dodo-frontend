import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConcernService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  raiseConcern(concern: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/raise`, concern);
  }

  getConcernsByUser(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user/${email}`);
  }

  getAllConcerns(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  updateConcernStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}?status=${status}`, {});
  }
}
