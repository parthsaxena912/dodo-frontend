import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensionService } from '../services/pension';

@Component({
  selector: 'app-pension-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="margin:20px;">
      <h3>Pension Records</h3>
      <table border="1" style="width:100%; text-align:left;">
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Amount</th>
          <th>Edit</th>
        </tr>
        <tr *ngFor="let pension of pensions">
          <td>{{pension.id}}</td>
          <td>{{pension.employeeName}}</td>
          <td>{{pension.amount}}</td>
          <td><a [routerLink]="['/edit-pension', pension.id]">Edit</a></td>
        </tr>
      </table>
    </div>
  `
})
export class PensionListComponent implements OnInit {
  pensions: any[] = [];

  constructor(private pensionService: PensionService) {}

  ngOnInit() {
    this.pensionService.getAllPensions().subscribe(data => {
      this.pensions = data;
    });
  }
}
