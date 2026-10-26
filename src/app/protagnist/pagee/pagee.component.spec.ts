import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagee } from './pagee.component';

describe('Pagee', () => {
  let component: Pagee;
  let fixture: ComponentFixture<Pagee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pagee],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
