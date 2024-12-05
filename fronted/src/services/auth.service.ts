import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { app } from '../../server';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/v1/users';  

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          this.saveToken(response.token); 
        }
      })
    );
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData).pipe(
        tap((response: any) => {
            if (response.token) {
                this.saveToken(response.token);
            }
        })
    );
}

forgotPassword(email: string): Observable<any> {
  return this.http.post(`${this.baseUrl}/forgotPassword`, { email });
}

  private saveToken(token: string): void {
    const decodedToken: any = jwtDecode(token); 
    const expires = new Date(decodedToken.exp * 1000); 
    document.cookie = `jwt=${token}; expires=${expires.toUTCString()}; path=/`;
  }

   _isLoggedIn: boolean = false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(status: boolean) {
    this._isLoggedIn = status;
  }
}