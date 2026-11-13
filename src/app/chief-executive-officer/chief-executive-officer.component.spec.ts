import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiefExecutiveOfficer } from './chief-executive-officer.component';

describe('ChiefExecutiveOfficer', () => {
  let component: ChiefExecutiveOfficer;
  let fixture: ComponentFixture<ChiefExecutiveOfficer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChiefExecutiveOfficer],
    }).compileComponents();

    fixture = TestBed.createComponent(ChiefExecutiveOfficer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
