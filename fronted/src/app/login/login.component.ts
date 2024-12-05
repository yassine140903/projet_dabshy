import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router , private authService: AuthService) { }

  // Input verification function
  verifInput(): boolean {
    let ok = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const email = document.getElementById('email') as HTMLInputElement;
    if (!email.value || !emailRegex.test(email.value)) {
      email?.style.setProperty('border-color', 'red');
      email.placeholder = 'Invalid email format!';
      ok = false;
    } else {
      email?.style.setProperty('border-color', '#000');
    }

    const pwd = document.getElementById('pwd') as HTMLInputElement;
    if (!pwd.value) {
      pwd?.style.setProperty('border-color', 'red');
      pwd.placeholder = 'Password must not be empty!';
      ok = false;
    } else {
      pwd?.style.setProperty('border-color', '#000');
    }

    return ok;
  }
  onLogin() {
    if (this.verifInput()) {
      this.authService.login(this.credentials).subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token); 
          this.router.navigate(['']); 
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Login failed: ' + (err.error.message || 'Unknown error'));
        }
      });
    }
  }

  onForgotPassword() {
    if (!this.credentials.email) {
      alert('Please enter your email!');
      return;
    }

    this.authService.forgotPassword(this.credentials.email).subscribe({
      next: (response) => {
        alert('Password reset link sent to your email.');
        console.log(response);
      },
      error: (err) => {
        console.error('Error sending reset link:', err);
        alert('There was an error. Please try again later.');
      },
    });
  }
}
