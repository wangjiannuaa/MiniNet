import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productee } from './productee.component';

describe('Productee', () => {
  let component: Productee;
  let fixture: ComponentFixture<Productee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Productee],
    }).compileComponents();

    fixture = TestBed.createComponent(Productee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
