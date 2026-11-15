import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Net } from './net.component';

describe('Net', () => {
  let component: Net;
  let fixture: ComponentFixture<Net>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Net],
    }).compileComponents();

    fixture = TestBed.createComponent(Net);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
