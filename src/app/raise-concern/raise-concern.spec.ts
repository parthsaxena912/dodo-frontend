import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseConcern } from './raise-concern';

describe('RaiseConcern', () => {
  let component: RaiseConcern;
  let fixture: ComponentFixture<RaiseConcern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaiseConcern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseConcern);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
