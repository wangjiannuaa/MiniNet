import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Licensee } from './licensee.component';

describe('Licensee', () => {
  let component: Licensee;
  let fixture: ComponentFixture<Licensee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Licensee],
    }).compileComponents();

    fixture = TestBed.createComponent(Licensee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
