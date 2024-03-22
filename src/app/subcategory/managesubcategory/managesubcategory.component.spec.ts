import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubcategoryComponent } from './managesubcategory.component';

describe('ManagesubcategoryComponent', () => {
  let component: ManagesubcategoryComponent;
  let fixture: ComponentFixture<ManagesubcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagesubcategoryComponent]
    });
    fixture = TestBed.createComponent(ManagesubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
