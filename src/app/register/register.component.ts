import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'USER';
  message = '';
  error = '';
  loading = false;

  private readonly API_URL = 'https://pesnionportal-production.up.railway.app/api/users/register';

  constructor(private http: HttpClient, private router: Router) {}

  register(form: NgForm) {
    if (!form.valid) {
      this.error = 'Please fill all required fields!';
      return;
    }

    this.error = '';
    this.message = '';
    this.loading = true;

    const user = {
      username: this.username.trim(),
      password: this.password.trim(),
      role: this.role,
    };

    this.http.post(this.API_URL, user, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.loading = false;
        this.message = res;

        if (res.toLowerCase().includes('success')) {
          setTimeout(() => this.router.navigate(['/login']), 1500);
        }
      },
      error: (err) => {
        this.loading = false;

        if (err.status === 409) {
          this.error = 'Username already exists!';
        } else {
          this.error = 'Registration failed! Try again.';
        }
      },
    });
  }
}
