import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpensionercorrect } from './viewpensionercorrect';

describe('Viewpensionercorrect', () => {
  let component: Viewpensionercorrect;
  let fixture: ComponentFixture<Viewpensionercorrect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewpensionercorrect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewpensionercorrect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
