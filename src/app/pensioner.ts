import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Pensioner {
  id?: number;
  name: string;
  aadhaarNumber: string;
  panNumber: string;
  bankName: string;
  accountNumber: string;
  pensionType: string;
  pensionAmount: number;
}

@Injectable({
  providedIn: 'root',
})
export class PensionerService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pensioner[]> {
    return this.http.get<Pensioner[]>(this.baseUrl);
  }

  add(pensioner: Pensioner): Observable<Pensioner> {
    return this.http.post<Pensioner>(this.baseUrl, pensioner);
  }

  update(id: number, pensioner: Pensioner): Observable<Pensioner> {
    return this.http.put<Pensioner>(`${this.baseUrl}/${id}`, pensioner);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
