import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-pensioner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './edit-pensioner.html',
  styleUrls: ['./edit-pensioner.css'],
})
export class EditPensionerComponent implements OnInit {
  pensionerForm: FormGroup;
  pensionerId: number;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.pensionerForm = this.fb.group({
      name: ['', Validators.required],
      aadhaarNumber: ['', Validators.required],
      panNumber: ['', Validators.required], // Add field in form HTML if needed
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      pensionType: ['', Validators.required],
      pensionAmount: [0, [Validators.required, Validators.min(0)]],
    });

    this.pensionerId = 0;
  }

  ngOnInit(): void {
    this.pensionerId = +this.route.snapshot.paramMap.get('id')!;
    this.loadPensioner();
  }

  loadPensioner() {
    this.http.get<any>(`http://localhost:8080/api/pensioners/${this.pensionerId}`).subscribe({
      next: (data) => {
        // Ensure all keys match your formControl names
        this.pensionerForm.patchValue(data);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading pensioner:', err);
        this.error = 'Failed to load pensioner.';
        this.loading = false;
      },
    });
  }

  savePensioner() {
    if (this.pensionerForm.invalid) return;

    this.http
      .put(`http://localhost:8080/api/pensioners/${this.pensionerId}`, this.pensionerForm.value)
      .subscribe({
        next: (res) => {
          alert('Pensioner updated successfully!');
          // Update UI with latest values
          this.pensionerForm.patchValue(res);
        },
        error: (err) => {
          console.error('Error updating pensioner:', err);
          alert('Failed to update pensioner.');
        },
      });
  }

  deletePensioner() {
    if (!confirm('Are you sure you want to delete this pensioner?')) return;

    this.http.delete(`http://localhost:8080/api/pensioners/${this.pensionerId}`).subscribe({
      next: () => {
        alert('Pensioner deleted successfully!');
        this.router.navigate(['/view-pension']);
      },
      error: (err) => {
        console.error('Error deleting pensioner:', err);
        alert('Failed to delete pensioner.');
      },
    });
  }

  goBack() {
    this.router.navigate(['/view-pension']);
  }
}
