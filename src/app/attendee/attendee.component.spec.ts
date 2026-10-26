import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Attendee } from './attendee.component';

describe('Attendee', () => {
  let component: Attendee;
  let fixture: ComponentFixture<Attendee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Attendee],
    }).compileComponents();

    fixture = TestBed.createComponent(Attendee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
