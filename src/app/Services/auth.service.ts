
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8222/api/v1/auth';

  constructor(private http: HttpClient) { }

  // Register user
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Authenticate user
  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, data);
  }

  // Validate token
  validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/validate`, { headers });
  }
}
  