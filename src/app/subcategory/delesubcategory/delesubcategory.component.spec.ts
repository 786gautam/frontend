import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelesubcategoryComponent } from './delesubcategory.component';

describe('DelesubcategoryComponent', () => {
  let component: DelesubcategoryComponent;
  let fixture: ComponentFixture<DelesubcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelesubcategoryComponent]
    });
    fixture = TestBed.createComponent(DelesubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
