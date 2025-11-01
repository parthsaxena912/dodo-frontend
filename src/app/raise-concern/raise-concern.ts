import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-raise-concern',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // HttpClientModule for HttpClient
  templateUrl: './raise-concern.html',
  styleUrls: ['./raise-concern.css'], // Correct property name
})
export class RaiseConcernComponent implements OnInit {
  concern = {
    username: '', // Will be auto-filled in ngOnInit
    category: '',
    subject: '',
    message: '',
  };

  categories = ['Pension Payment', 'Profile Update', 'Technical Issue', 'Document Upload', 'Other'];

  apiUrl = 'http://localhost:8080/api/concerns'; // Backend API URL
  isSubmitting = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Auto-fetch logged-in username
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      this.concern.username = loggedInUser;
    }
  }

  onSubmit() {
    if (!this.concern.category || !this.concern.subject || !this.concern.message) {
      alert('⚠️ Please fill all fields before submitting.');
      return;
    }

    this.isSubmitting = true;

    this.http.post(this.apiUrl, this.concern).subscribe({
      next: () => {
        alert('✅ Your concern has been submitted successfully!');
        this.resetForm();
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Error submitting concern:', err);
        alert('❌ Something went wrong. Please try again later.');
        this.isSubmitting = false;
      },
    });
  }

  resetForm() {
    this.concern.category = '';
    this.concern.subject = '';
    this.concern.message = '';
    // Username remains displayed and non-editable
  }
}
