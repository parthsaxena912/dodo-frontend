import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewInsurance } from './admin-view-insurance';

describe('AdminViewInsurance', () => {
  let component: AdminViewInsurance;
  let fixture: ComponentFixture<AdminViewInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewInsurance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
