import { TestBed } from '@angular/core/testing';
import { Aspectofview } from './aspectofview.llm';

describe('Aspectofview', () => {
  let service: Aspectofview;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aspectofview);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
