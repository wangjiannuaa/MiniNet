import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layoutpage } from './layoutpage.component';

describe('Layoutpage', () => {
  let component: Layoutpage;
  let fixture: ComponentFixture<Layoutpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Layoutpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
