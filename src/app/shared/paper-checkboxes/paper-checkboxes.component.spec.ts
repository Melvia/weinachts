import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperCheckboxesComponent } from './paper-checkboxes.component';

describe('PaperCheckboxesComponent', () => {
  let component: PaperCheckboxesComponent;
  let fixture: ComponentFixture<PaperCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperCheckboxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
