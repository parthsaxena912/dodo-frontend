import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionList } from './pension-list';

describe('PensionList', () => {
  let component: PensionList;
  let fixture: ComponentFixture<PensionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
