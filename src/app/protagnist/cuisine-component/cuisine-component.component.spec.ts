import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuisineComponent } from './cuisine-component.component';

describe('CuisineComponent', () => {
  let component: CuisineComponent;
  let fixture: ComponentFixture<CuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuisineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuisineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
