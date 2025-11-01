import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="logo">DRDO Pension Portal</div>
      <ul class="nav-links">
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
        </li>
        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
        <li><a routerLink="/add-pensioner" routerLinkActive="active">Add Pensioner</a></li>
        <li><a routerLink="/view-pension" routerLinkActive="active">View Pension</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 30px;
        background-color: #00204a;
        color: white;
        font-weight: bold;
      }

      .logo {
        font-size: 1.5rem;
      }

      .nav-links {
        list-style: none;
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
      }

      .nav-links li a {
        color: white;
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 5px;
        transition: 0.3s;
      }

      .nav-links li a:hover {
        background-color: #007bff;
      }

      /* Active link styling */
      .nav-links li a.active {
        background-color: #ffcc00;
        color: #00204a;
        font-weight: bold;
      }
    `,
  ],
})
export class NavbarComponent {}
