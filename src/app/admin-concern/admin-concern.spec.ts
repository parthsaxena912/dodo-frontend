import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminConcernsComponent } from './admin-concern'; // ✅ correct filename and class

describe('AdminConcernsComponent', () => {
  let component: AdminConcernsComponent;
  let fixture: ComponentFixture<AdminConcernsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConcernsComponent], // ✅ standalone component import
    }).compileComponents();

    fixture = TestBed.createComponent(AdminConcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
