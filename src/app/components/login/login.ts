import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="login-page">
      <div class="login-card">
        <h2>Welcome Back 👋</h2>
        <p>Please login to access your Pension Portal</p>

        <form (ngSubmit)="login()" #loginForm="ngForm">
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              [(ngModel)]="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              [(ngModel)]="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" [disabled]="loginForm.invalid">Login</button>
        </form>

        <div class="extra-links">
          <p>Don’t have an account? <a routerLink="/register">Register here</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .login-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #007bff, #00c6ff);
        font-family: 'Poppins', sans-serif;
      }

      .login-card {
        background: #fff;
        padding: 40px 50px;
        border-radius: 15px;
        box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
        text-align: center;
        width: 350px;
        transition: transform 0.3s ease;
      }

      .login-card:hover {
        transform: translateY(-8px);
      }

      h2 {
        color: #333;
        margin-bottom: 10px;
      }

      p {
        color: #777;
        margin-bottom: 25px;
        font-size: 14px;
      }

      .input-group {
        text-align: left;
        margin-bottom: 20px;
      }

      label {
        display: block;
        font-weight: 600;
        color: #333;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 15px;
        outline: none;
        transition: 0.3s;
      }

      input:focus {
        border-color: #007bff;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
      }

      button {
        width: 100%;
        background-color: #007bff;
        border: none;
        color: white;
        font-size: 16px;
        padding: 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
      }

      button:hover {
        background-color: #0056b3;
      }

      .extra-links {
        margin-top: 15px;
        font-size: 14px;
      }

      a {
        color: #007bff;
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { username: this.username, password: this.password };

    this.http
      .post('http://localhost:8080/api/users/login', loginData, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          const role = response.trim();
          if (role === 'ADMIN') {
            this.router.navigate(['/admin'], { queryParams: { user: this.username } });
          } else if (role === 'USER') {
            this.router.navigate(['/user'], { queryParams: { user: this.username } });
          } else {
            alert('Invalid credentials! Please check your username or password.');
          }
        },
        error: (err) => {
          console.error(err);
          alert('Server error! Please try again later.');
        },
      });
  }
}
