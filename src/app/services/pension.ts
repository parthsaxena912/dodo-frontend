import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensionService {
  private apiUrl = 'http://localhost:8080/api/pensioners';

  constructor(private http: HttpClient) {}

  getAllPensions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPensionById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePension(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
