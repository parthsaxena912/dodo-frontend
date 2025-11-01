import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPensioner } from './add-pensioner';

describe('AddPensioner', () => {
  let component: AddPensioner;
  let fixture: ComponentFixture<AddPensioner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPensioner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPensioner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
