import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ledger } from './ledger.component';

describe('Ledger', () => {
  let component: Ledger;
  let fixture: ComponentFixture<Ledger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ledger],
    }).compileComponents();

    fixture = TestBed.createComponent(Ledger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
