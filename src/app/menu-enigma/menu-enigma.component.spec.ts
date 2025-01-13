import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnigmaComponent } from './menu-enigma.component';

describe('MenuEnigmaComponent', () => {
  let component: MenuEnigmaComponent;
  let fixture: ComponentFixture<MenuEnigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEnigmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEnigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
