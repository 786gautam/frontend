import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelecategoryComponent } from './delecategory.component';

describe('DelecategoryComponent', () => {
  let component: DelecategoryComponent;
  let fixture: ComponentFixture<DelecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelecategoryComponent]
    });
    fixture = TestBed.createComponent(DelecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
