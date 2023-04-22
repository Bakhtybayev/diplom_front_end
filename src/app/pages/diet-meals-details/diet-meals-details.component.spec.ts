import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMealsDetailsComponent } from './diet-meals-details.component';

describe('DietMealsDetailsComponent', () => {
  let component: DietMealsDetailsComponent;
  let fixture: ComponentFixture<DietMealsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietMealsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietMealsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
