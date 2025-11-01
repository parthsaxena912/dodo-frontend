import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConcern } from './view-concern';

describe('ViewConcern', () => {
  let component: ViewConcern;
  let fixture: ComponentFixture<ViewConcern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewConcern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConcern);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
