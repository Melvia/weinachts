import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambleEffectComponent } from './scramble-effect.component';

describe('ScrambleEffectComponent', () => {
  let component: ScrambleEffectComponent;
  let fixture: ComponentFixture<ScrambleEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrambleEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrambleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
