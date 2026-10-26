import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PMonduty } from './pmonduty.component';

describe('PMonduty', () => {
  let component: PMonduty;
  let fixture: ComponentFixture<PMonduty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PMonduty],
    }).compileComponents();

    fixture = TestBed.createComponent(PMonduty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
