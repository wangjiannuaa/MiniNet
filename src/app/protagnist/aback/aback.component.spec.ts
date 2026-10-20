import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aback } from './aback.component';

describe('Aback', () => {
  let component: Aback;
  let fixture: ComponentFixture<Aback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aback],
    }).compileComponents();

    fixture = TestBed.createComponent(Aback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
