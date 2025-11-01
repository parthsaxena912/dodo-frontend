import { Component, OnInit } from '@angular/core';
import { InsuranceApplication, InsuranceService } from '../insurance';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-apply-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-apply-insurance.html',
  styleUrl: './user-apply-insurance.css',
})
export class UserApplyInsuranceComponent implements OnInit {
  insuranceType: string = '';
  message: string = '';
  userApplications: InsuranceApplication[] = [];
  userId = 1; // Replace with logged-in user's ID

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit() {
    this.loadUserApplications();
  }

  apply() {
    if (!this.insuranceType) return;
    const payload = { insuranceType: this.insuranceType, userId: this.userId };
    this.insuranceService.applyForInsurance(payload).subscribe(() => {
      this.message = 'Insurance applied successfully!';
      this.insuranceType = '';
      this.loadUserApplications();
    });
  }

  loadUserApplications() {
    this.insuranceService
      .getApplicationsByUser(this.userId)
      .subscribe((data) => (this.userApplications = data));
  }
}
