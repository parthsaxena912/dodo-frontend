import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav style="padding:10px; background:#f2f2f2;">
      <a routerLink="/register" style="margin-right:15px;">Register</a>
      <a routerLink="/login">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
