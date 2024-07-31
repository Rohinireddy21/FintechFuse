import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSavingsComponent } from './goals-savings.component';

describe('GoalsSavingsComponent', () => {
  let component: GoalsSavingsComponent;
  let fixture: ComponentFixture<GoalsSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsSavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
