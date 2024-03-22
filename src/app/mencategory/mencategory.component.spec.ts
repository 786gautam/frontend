import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MencategoryComponent } from './mencategory.component';

describe('MencategoryComponent', () => {
  let component: MencategoryComponent;
  let fixture: ComponentFixture<MencategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MencategoryComponent]
    });
    fixture = TestBed.createComponent(MencategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
