import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleproductComponent } from './deleproduct.component';

describe('DeleproductComponent', () => {
  let component: DeleproductComponent;
  let fixture: ComponentFixture<DeleproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleproductComponent]
    });
    fixture = TestBed.createComponent(DeleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
