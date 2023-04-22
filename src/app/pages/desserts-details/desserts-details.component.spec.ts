import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsDetailsComponent } from './desserts-details.component';

describe('DessertsDetailsComponent', () => {
  let component: DessertsDetailsComponent;
  let fixture: ComponentFixture<DessertsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
