import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SVG } from './svg.component';

describe('SVG', () => {
  let component: SVG;
  let fixture: ComponentFixture<SVG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SVG],
    }).compileComponents();

    fixture = TestBed.createComponent(SVG);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
