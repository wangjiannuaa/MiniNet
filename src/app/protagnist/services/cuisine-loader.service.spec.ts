import { TestBed } from '@angular/core/testing';
import { CuisineLoader } from './cuisine-loader.service';

describe('CuisineLoader', () => {
  let service: CuisineLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuisineLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
