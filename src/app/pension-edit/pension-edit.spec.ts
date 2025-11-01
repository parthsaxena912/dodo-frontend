import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Add if using reactive forms
import { PensionEditComponent } from './pension-edit'; // Correct path

describe('PensionEditComponent', () => {
  let component: PensionEditComponent;
  let fixture: ComponentFixture<PensionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PensionEditComponent],
      imports: [ReactiveFormsModule], // Add modules your component depends on
    }).compileComponents();

    fixture = TestBed.createComponent(PensionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
