import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerfooterComponent } from './customerfooter.component';

describe('CustomerfooterComponent', () => {
  let component: CustomerfooterComponent;
  let fixture: ComponentFixture<CustomerfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerfooterComponent]
    });
    fixture = TestBed.createComponent(CustomerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
