import { TestBed } from '@angular/core/testing';

import { subcategoryService } from './subcategory.service';

describe('SubcategoryService', () => {
  let service: subcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(subcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
