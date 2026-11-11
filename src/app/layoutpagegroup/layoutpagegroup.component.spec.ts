import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layoutpagegroup } from './layoutpagegroup.component';

describe('Layoutpagegroup', () => {
  let component: Layoutpagegroup;
  let fixture: ComponentFixture<Layoutpagegroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Layoutpagegroup],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutpagegroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
