import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearButtonComponent } from './new-year-button.component';

describe('NewYearButtonComponent', () => {
  let component: NewYearButtonComponent;
  let fixture: ComponentFixture<NewYearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewYearButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
