import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Storiee } from './storiee.component';

describe('Storiee', () => {
  let component: Storiee;
  let fixture: ComponentFixture<Storiee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Storiee],
    }).compileComponents();

    fixture = TestBed.createComponent(Storiee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
