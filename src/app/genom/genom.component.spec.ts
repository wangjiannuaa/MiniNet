import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Genom } from './genom.component';

describe('Genom', () => {
  let component: Genom;
  let fixture: ComponentFixture<Genom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Genom],
    }).compileComponents();

    fixture = TestBed.createComponent(Genom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
