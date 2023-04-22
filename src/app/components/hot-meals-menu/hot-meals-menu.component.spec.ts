import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMealsMenuComponent } from './hot-meals-menu.component';

describe('HotMealsMenuComponent', () => {
  let component: HotMealsMenuComponent;
  let fixture: ComponentFixture<HotMealsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotMealsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotMealsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
