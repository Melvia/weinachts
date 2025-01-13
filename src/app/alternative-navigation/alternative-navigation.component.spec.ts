import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeNavigationComponent } from './alternative-navigation.component';

describe('AlternativeNavigationComponent', () => {
  let component: AlternativeNavigationComponent;
  let fixture: ComponentFixture<AlternativeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternativeNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
