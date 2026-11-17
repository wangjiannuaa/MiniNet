import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layoutpagecube } from './layoutpagecube.component';

describe('Layoutpagecube', () => {
  let component: Layoutpagecube;
  let fixture: ComponentFixture<Layoutpagecube>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Layoutpagecube],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutpagecube);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
