import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePensioners } from './manage-pensioners';

describe('ManagePensioners', () => {
  let component: ManagePensioners;
  let fixture: ComponentFixture<ManagePensioners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePensioners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePensioners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
