import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplyInsurance } from './user-apply-insurance';

describe('UserApplyInsurance', () => {
  let component: UserApplyInsurance;
  let fixture: ComponentFixture<UserApplyInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApplyInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserApplyInsurance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
