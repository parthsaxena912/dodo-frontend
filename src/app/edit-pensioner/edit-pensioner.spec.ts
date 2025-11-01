import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPensioner } from './edit-pensioner';

describe('EditPensioner', () => {
  let component: EditPensioner;
  let fixture: ComponentFixture<EditPensioner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPensioner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPensioner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
