import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMealsMenuComponent } from './diet-meals-menu.component';

describe('DietMealsMenuComponent', () => {
  let component: DietMealsMenuComponent;
  let fixture: ComponentFixture<DietMealsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietMealsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietMealsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
