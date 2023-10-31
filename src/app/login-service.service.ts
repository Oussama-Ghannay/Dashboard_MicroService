import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'http://localhost:3000/user';
  private loginUrl = 'http://localhost:3000/user/login';
  private logoutUrl = 'http://localhost:3000/user/logout';
  
  constructor(private http: HttpClient) { }
  register(userDetails: any): Observable<any> {
    const registerUrl = `${this.apiUrl}/add`;
    return this.http.post<any>(registerUrl, userDetails);
  }

  login(userData: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, userData);
  }
  logout(): Observable<any> {
    // Call the logout API endpoint
    return this.http.post<any>(this.logoutUrl, {});
  }
}
