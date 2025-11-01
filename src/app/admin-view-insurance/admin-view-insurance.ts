import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceService, InsuranceApplication } from '../insurance';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-insurance',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin-view-insurance.html',
  styleUrls: ['./admin-view-insurance.css'],
})
export class AdminViewInsuranceComponent implements OnInit {
  applications: InsuranceApplication[] = [];

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.insuranceService.getAllApplications().subscribe((data) => (this.applications = data));
  }

  updateStatus(id: number, status: string) {
    this.insuranceService.updateStatus(id, status).subscribe(() => this.loadApplications());
  }
}
