import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMealsDetailsComponent } from './hot-meals-details.component';

describe('HotMealsDetailsComponent', () => {
  let component: HotMealsDetailsComponent;
  let fixture: ComponentFixture<HotMealsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotMealsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotMealsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
