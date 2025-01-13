import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperButtonsComponent } from './paper-buttons.component';

describe('PaperButtonsComponent', () => {
  let component: PaperButtonsComponent;
  let fixture: ComponentFixture<PaperButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
