import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Welcome, {{ username }} 👋</h1>
        <p>Your personalized Pension Management Portal</p>
      </header>

      <section class="dashboard-content">
        <!-- Pension Records -->
        <div class="card" (click)="viewPension()">
          <div class="icon">💰</div>
          <h3>View Pension Records</h3>
          <p>Check your pension details, payment history, and status.</p>
        </div>

        <!-- Health Insurance -->
        <div class="card" (click)="applyInsurance()">
          <div class="icon">🩺</div>
          <h3>Apply for Health Insurance</h3>
          <p>Get medical coverage and view available insurance plans.</p>
        </div>

        <!-- Raise a Concern -->
        <div class="card">
          <div class="icon">📩</div>
          <h3>Raise a Concern</h3>
          <p>Submit your issues or queries directly to our support team.</p>
          <button type="button" class="btn btn-outline-info" (click)="raiseConcern()">
            Raise a Concern
          </button>
        </div>
      </section>

      <footer class="dashboard-footer">
        <p>© 2025 DRDO Pension Portal | All Rights Reserved</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .dashboard-container {
        font-family: 'Poppins', sans-serif;
        color: #333;
        min-height: 100vh;
        background: linear-gradient(135deg, #00c6ff, #007bff);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .dashboard-header {
        text-align: center;
        color: #fff;
        padding: 40px 20px 20px;
        animation: fadeInDown 1s ease-in-out;
      }

      .dashboard-header h1 {
        font-size: 2.4rem;
        margin-bottom: 10px;
      }

      .dashboard-header p {
        font-size: 1.1rem;
        opacity: 0.9;
      }

      .dashboard-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        margin-top: 40px;
        width: 90%;
        max-width: 1000px;
        animation: fadeInUp 1s ease-in-out;
      }

      .card {
        background: #fff;
        width: 300px;
        border-radius: 16px;
        padding: 30px 20px;
        text-align: center;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }

      .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
      }

      .card .icon {
        font-size: 40px;
        margin-bottom: 15px;
        transition: transform 0.3s;
      }

      .card:hover .icon {
        transform: scale(1.1);
      }

      .card h3 {
        font-size: 1.4rem;
        margin-bottom: 10px;
        color: #007bff;
      }

      .card p {
        font-size: 0.95rem;
        color: #555;
        line-height: 1.5;
      }

      .dashboard-footer {
        margin-top: auto;
        text-align: center;
        color: #fff;
        padding: 20px 0;
        font-size: 0.9rem;
        opacity: 0.85;
      }

      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .card {
          width: 85%;
        }
      }
    `,
  ],
})
export class UserDashboardComponent implements OnInit {
  username = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['user'] || 'User';
    });
  }

  raiseConcern() {
    this.router.navigate(['/raise-concern']); // ✅ Works properly now
  }

  viewPension() {
    this.router.navigate(['/view-pension']);
  }

  applyInsurance() {
    this.router.navigate(['/user/apply-insurance']);
  }
}
