import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <!-- ===== NAVBAR ===== -->
    <nav class="navbar">
      <div class="nav-left">
        <div class="nav-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="logo">DRDO Pension Portal</div>

      <div class="nav-right" [class.active]="menuOpen">
        <button routerLink="/login" class="nav-btn">Login</button>
        <button routerLink="/register" class="nav-btn nav-btn-outline">Register</button>
      </div>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <div class="hero-section">
      <div class="overlay"></div>
      <div class="drdo-bg"></div>
      <!-- ✅ Background DRDO logo -->
      <div class="content">
        <div class="hero">
          <div class="logo-sign">
            <span>DRDO</span>
          </div>
          <h1>Welcome to DRDO Pension Portal</h1>
          <p>Secure system for pension management</p>
        </div>
        <img src="/assets/abc.jpg" alt="DRDO Logo" class="logo" />
        <h1>Welcome to DRDO Pension Management System</h1>
        <p>
          A modern, interactive platform for managing pensioner details, designed with transparency,
          security, and ease of use.
        </p>
        <div class="buttons">
          <button routerLink="/login" class="btn">Add Pensioner</button>
          <button routerLink="/login" class="btn btn-outline">View Pensioners</button>
        </div>
      </div>
    </div>

    <!-- ===== INFO SECTION ===== -->
    <section class="info-section">
      <div class="card">
        <h3>🔒 Secure Access</h3>
        <p>All data is encrypted and protected using modern security standards.</p>
      </div>
      <div class="card">
        <h3>📊 Real-Time Updates</h3>
        <p>Pension details are updated instantly from the backend system.</p>
      </div>
      <div class="card">
        <h3>👥 Admin Management</h3>
        <p>Admins can add, update, or remove pensioner records easily.</p>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer>
      <p>© 2025 Defence Research and Development Organisation (DRDO), India</p>
    </footer>
  `,
  styles: [
    `
      /* ===== NAVBAR ===== */
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.95);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
        z-index: 10;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
      }

      .nav-left,
      .nav-right {
        display: flex;
        align-items: center;
      }

      .logo {
        font-size: 1.6rem;
        font-weight: bold;
        background: linear-gradient(90deg, #00c6ff, #0072ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        flex: 1;
      }

      .nav-right button {
        margin-left: 15px;
      }

      .nav-btn {
        background: #00c6ff;
        color: white;
        border: none;
        padding: 10px 22px;
        border-radius: 25px;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0px 4px 12px rgba(0, 198, 255, 0.4);
      }

      .nav-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0px 6px 18px rgba(0, 198, 255, 0.5);
      }

      .nav-btn-outline {
        background: transparent;
        border: 2px solid #0072ff;
        color: #0072ff;
      }

      .nav-btn-outline:hover {
        background: #0072ff;
        color: white;
        transform: translateY(-3px);
      }

      .nav-toggle {
        display: none;
        flex-direction: column;
        cursor: pointer;
      }

      .nav-toggle span {
        height: 3px;
        width: 25px;
        background: #0072ff;
        margin: 4px 0;
        border-radius: 3px;
        transition: 0.3s;
      }

      .nav-right.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 30px;
        background: white;
        padding: 15px;
        border-radius: 8px;
      }

      /* ===== HERO SECTION ===== */
      .hero-section {
        position: relative;
        background: linear-gradient(135deg, #00c6ff, #0072ff);
        height: 100vh;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-top: 70px;
        overflow: hidden;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);
        z-index: 1;
      }

      /* ✅ DRDO LOGO BACKGROUND */
      .drdo-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 650px;
        height: 650px;
        background: no-repeat center center;
        background-size: contain;
        opacity: 0.08;
        transform: translate(-50%, -50%);
        z-index: 0;
        filter: brightness(1.1) drop-shadow(0 0 20px rgba(0, 114, 255, 0.4));
        animation: slowSpin 60s linear infinite;
      }

      .content {
        position: relative;
        z-index: 2;
        max-width: 700px;
        padding: 20px;
        animation: fadeInUp 1.2s ease-in-out;
      }

      .logo-sign {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00f2fe, #4facfe);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 28px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

        /* ✅ Centering */
        margin: 40px auto; /* Centers horizontally and adds space around */
        display: flex;

        /* Floating animation */
        animation: floatLogo 3s ease-in-out infinite;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 15px;
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 30px;
        line-height: 1.6;
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
      }

      .btn {
        background: linear-gradient(135deg, #00f2fe, #4facfe);
        color: white;
        border: none;
        padding: 12px 26px;
        border-radius: 30px;
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 6px 12px rgba(0, 242, 254, 0.4);
        transition: all 0.3s ease-in-out;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 242, 254, 0.5);
      }

      .btn-outline {
        background: transparent;
        border: 2px solid white;
        color: white;
      }

      .btn-outline:hover {
        background: white;
        color: #0072ff;
        transform: translateY(-3px);
      }

      /* ===== INFO SECTION ===== */
      .info-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 60px 20px;
        background: #f0f8ff;
        text-align: center;
      }

      .card {
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
      }

      .card:hover {
        transform: translateY(-10px);
        background: linear-gradient(135deg, #00c6ff, #0072ff);
        color: white;
        box-shadow: 0 8px 20px rgba(0, 198, 255, 0.4);
      }

      .card h3 {
        margin-bottom: 10px;
      }

      .card p {
        color: #555;
      }

      /* ===== FOOTER ===== */
      footer {
        background: #0072ff;
        color: white;
        text-align: center;
        padding: 20px 10px;
        font-size: 0.95rem;
      }

      /* ===== ANIMATIONS ===== */
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes floatLogo {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes slowSpin {
        from {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1rem;
        }
        .buttons {
          flex-direction: column;
        }
        .nav-toggle {
          display: flex;
        }
        .nav-right {
          display: none;
        }
        .nav-right.active {
          display: flex;
        }
        .drdo-bg {
          width: 350px;
          height: 350px;
          opacity: 0.1;
        }
      }
    `,
  ],
})
export class HomeComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
