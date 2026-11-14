import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MXwidget } from './mxwidget.component';

describe('MXwidget', () => {
  let component: MXwidget;
  let fixture: ComponentFixture<MXwidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MXwidget],
    }).compileComponents();

    fixture = TestBed.createComponent(MXwidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
