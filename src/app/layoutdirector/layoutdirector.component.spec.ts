import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layoutdirector } from './layoutdirector.component';

describe('Layoutdirector', () => {
  let component: Layoutdirector;
  let fixture: ComponentFixture<Layoutdirector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Layoutdirector],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutdirector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
