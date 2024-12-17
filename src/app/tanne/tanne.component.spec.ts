import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanneComponent } from './tanne.component';

describe('TanneComponent', () => {
  let component: TanneComponent;
  let fixture: ComponentFixture<TanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
