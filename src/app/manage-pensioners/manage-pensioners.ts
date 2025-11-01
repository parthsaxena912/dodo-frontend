import { Component, OnInit } from '@angular/core';
import { Pensioner, PensionerService } from '../pensioner';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-manage-pensioners',
  imports: [FormsModule, CommonModule],
  templateUrl: './manage-pensioners.html',
  styleUrl: './manage-pensioners.css',
})
export class ManagePensionersComponent implements OnInit {
  pensioners: Pensioner[] = [];
  pensionerForm: Pensioner = {
    name: '',
    aadhaarNumber: '',
    panNumber: '',
    bankName: '',
    accountNumber: '',
    pensionType: 'Self',
    pensionAmount: 0,
  };
  editMode = false;
  selectedId: number | null = null;

  constructor(private pensionerService: PensionerService) {}

  ngOnInit(): void {
    this.loadPensioners();
  }

  loadPensioners() {
    this.pensionerService.getAll().subscribe((data) => (this.pensioners = data));
  }

  savePensioner() {
    if (this.editMode && this.selectedId) {
      this.pensionerService.update(this.selectedId, this.pensionerForm).subscribe(() => {
        this.loadPensioners();
        this.resetForm();
      });
    } else {
      this.pensionerService.add(this.pensionerForm).subscribe(() => {
        this.loadPensioners();
        this.resetForm();
      });
    }
  }

  editPensioner(p: Pensioner) {
    this.pensionerForm = { ...p };
    this.editMode = true;
    this.selectedId = p.id!;
  }

  deletePensioner(id: number) {
    if (confirm('Are you sure you want to delete this pensioner?')) {
      this.pensionerService.delete(id).subscribe(() => this.loadPensioners());
    }
  }

  resetForm() {
    this.pensionerForm = {
      name: '',
      aadhaarNumber: '',
      panNumber: '',
      bankName: '',
      accountNumber: '',
      pensionType: 'Self',
      pensionAmount: 0,
    };
    this.editMode = false;
    this.selectedId = null;
  }
}
