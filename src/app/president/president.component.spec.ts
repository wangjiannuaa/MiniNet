import { ComponentFixture, TestBed } from '@angular/core/testing';
import { President } from './president.component';

describe('President', () => {
  let component: President;
  let fixture: ComponentFixture<President>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [President],
    }).compileComponents();

    fixture = TestBed.createComponent(President);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
