import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AA } from './aa.component';

describe('AA', () => {
  let component: AA;
  let fixture: ComponentFixture<AA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AA],
    }).compileComponents();

    fixture = TestBed.createComponent(AA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
