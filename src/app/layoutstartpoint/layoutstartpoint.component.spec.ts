import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layoutstartpoint } from './layoutstartpoint.component';

describe('Layoutstartpoint', () => {
  let component: Layoutstartpoint;
  let fixture: ComponentFixture<Layoutstartpoint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Layoutstartpoint],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutstartpoint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
