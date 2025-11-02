import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-container">
      <aside class="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            (click)="navigate('manage-pensioners')"
            [class.active]="activeSection === 'manage-pensioners'"
          >
            👥 Manage Pensioners
          </li>
          <li (click)="navigate('summary')" [class.active]="activeSection === 'summary'">
            📊 Pension Summary
          </li>
          <li (click)="navigate('concerns')" [class.active]="activeSection === 'concerns'">
            📩 Raised Concerns
          </li>
          <li (click)="navigate('analytics')" [class.active]="activeSection === 'analytics'">
            📈 Analytics
          </li>
          <li (click)="navigate('payment')" [class.active]="activeSection === 'payment'">
            💸 Send Payment
          </li>
          <li class="logout" (click)="logout()">🚪 Logout</li>
        </ul>
      </aside>

      <main class="content-area">
        <header>
          <!-- Dynamic admin name -->
          <h1>Welcome, {{ adminName }} 👋</h1>
          <p>Manage pensioners and system operations from this dashboard.</p>
        </header>

        <!-- Default Dashboard Cards -->
        <section class="cards-section" *ngIf="!showManagePensioners">
          <div class="card" *ngIf="activeSection === 'manage-pensioners'">
            <div class="icon">👥</div>
            <h3>Manage Pensioners</h3>
            <p>View, add, update, or delete pensioner records.</p>
            <button (click)="openManagePensioners()">Open Management</button>
          </div>

          <div class="card" *ngIf="activeSection === 'concerns'">
            <div class="icon">📩</div>
            <h3>Raised Concerns</h3>
            <p>View and resolve user complaints and issues.</p>
            <button (click)="openConcerns()">View Concerns</button>
          </div>

          <div class="card" *ngIf="activeSection === 'summary'">
            <div class="icon">📊</div>
            <h3>Pension Summary</h3>
            <p>Get details of all pensioners with real-time records.</p>
            <button (click)="openSummary()">View Summary</button>
          </div>

          <div class="card" *ngIf="activeSection === 'analytics'">
            <div class="icon">📈</div>
            <h3>Analytics</h3>
            <p>Visual reports of pension distribution and data insights.</p>
            <button (click)="openAnalytics()">View Reports</button>
          </div>

          <div class="card" *ngIf="activeSection === 'payment'">
            <div class="icon">💸</div>
            <h3>Send Payment</h3>
            <p>Initiate pension payment to a selected user.</p>
            <button (click)="openPayment()">Send Now</button>
          </div>
        </section>

        <!-- Pensioner Management Section -->
        <section class="management-section" *ngIf="showManagePensioners">
          <h2>👥 Pensioner Management</h2>

          <div class="management-buttons">
            <button (click)="viewAll()">📋 View All Pensioners</button>
            <button (click)="addPensioner()">➕ Add Pensioner</button>
            <button (click)="updatePensioner()">✏️ Update Pensioner</button>
            <button (click)="deletePensioner()">🗑️ Delete Pensioner</button>
            <button class="back" (click)="closeManagePensioners()">⬅️ Back to Dashboard</button>
          </div>

          <div class="management-output">
            <p *ngIf="actionMessage">{{ actionMessage }}</p>
          </div>
        </section>

        <footer>
          <p>© 2025 DRDO Pension Portal | Admin Management System</p>
        </footer>
      </main>
    </div>
  `,
  styles: [
    `
      * {
        box-sizing: border-box;
      }

      .admin-container {
        display: flex;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        background: #f9fafc;
      }

      .sidebar {
        width: 240px;
        background: linear-gradient(180deg, #007bff, #0056b3);
        color: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .sidebar h2 {
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        letter-spacing: 1px;
      }

      .sidebar ul {
        list-style: none;
        padding: 0;
      }

      .sidebar li {
        padding: 12px 10px;
        margin: 10px 0;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .sidebar li:hover,
      .sidebar li.active {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
      }

      .sidebar .logout {
        color: #ffdddd;
        font-weight: bold;
        margin-top: auto;
        background: rgba(255, 255, 255, 0.15);
      }

      .content-area {
        flex: 1;
        padding: 30px;
        overflow-y: auto;
        background: linear-gradient(120deg, #f0f8ff, #e9f3ff);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      header {
        text-align: center;
        margin-bottom: 30px;
        color: #333;
        animation: fadeInDown 1s ease;
      }
      header h1 {
        font-size: 2rem;
        color: #0056b3;
      }

      .cards-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        animation: fadeInUp 1s ease;
      }

      .card {
        background: #fff;
        width: 300px;
        padding: 25px;
        border-radius: 16px;
        text-align: center;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }

      .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
      }

      .icon {
        font-size: 40px;
        margin-bottom: 15px;
        color: #007bff;
      }

      button {
        background: #007bff;
        border: none;
        color: #fff;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
      }

      button:hover {
        background: #0056b3;
      }

      .management-section {
        text-align: center;
        animation: fadeInUp 1s ease;
      }
      .management-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
      }
      .management-buttons .back {
        background: #6c757d;
      }
      .management-buttons .back:hover {
        background: #495057;
      }
      .management-output {
        margin-top: 25px;
        font-size: 1.1rem;
        color: #333;
      }

      footer {
        text-align: center;
        margin-top: 40px;
        color: #777;
        font-size: 0.9rem;
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

      @media (max-width: 768px) {
        .admin-container {
          flex-direction: column;
        }
        .sidebar {
          width: 100%;
          flex-direction: row;
          overflow-x: auto;
        }
        .content-area {
          padding: 20px;
        }
        .card {
          width: 85%;
        }
      }
    `,
  ],
})
export class AdminDashboardComponent {
  activeSection = 'manage-pensioners';
  showManagePensioners = false;
  actionMessage = '';
  concerns: any;
  adminName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch admin name dynamically after login
    const storedName = localStorage.getItem('adminName');
    this.adminName = storedName ? storedName : 'Admin';
  }

  navigate(section: string) {
    this.activeSection = section;
    this.showManagePensioners = false;
  }

  openManagePensioners() {
    this.showManagePensioners = true;
  }
  closeManagePensioners() {
    this.showManagePensioners = false;
  }

  viewAll() {
    this.router.navigate(['/view-pension']);
  }
  addPensioner() {
    this.router.navigate(['/add-pensioner']);
  }
  updatePensioner() {
    this.router.navigate(['/view-pensionercorrect']);
  }
  deletePensioner() {
    this.actionMessage = 'Opening Delete Pensioner options...';
  }

  openSummary() {
    alert('Displaying all pension records...');
  }
  openConcerns() {
    this.router.navigate(['/admin-concerns']);
  }
  openAnalytics() {
    this.router.navigate(['/admin/analytics']);
  }
  openPayment() {
    this.router.navigate(['/admin/payment']);
  }

  logout() {
    localStorage.removeItem('adminName'); // optional: clear stored admin name
    this.router.navigate(['/login']);
  }
}
