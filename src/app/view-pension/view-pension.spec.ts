import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPensionComponent } from './view-pension';

describe('ViewPensionComponent', () => {
  let component: ViewPensionComponent;
  let fixture: ComponentFixture<ViewPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPensionComponent], // ✅ no `const` needed
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
