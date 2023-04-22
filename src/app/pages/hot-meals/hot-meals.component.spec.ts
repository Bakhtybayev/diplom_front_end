import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMealsComponent } from './hot-meals.component';

describe('HotMealsComponent', () => {
  let component: HotMealsComponent;
  let fixture: ComponentFixture<HotMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
