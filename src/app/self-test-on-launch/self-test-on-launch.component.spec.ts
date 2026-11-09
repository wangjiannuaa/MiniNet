import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelfTestOnLaunch } from './self-test-on-launch.component';

describe('SelfTestOnLaunch', () => {
  let component: SelfTestOnLaunch;
  let fixture: ComponentFixture<SelfTestOnLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfTestOnLaunch],
    }).compileComponents();

    fixture = TestBed.createComponent(SelfTestOnLaunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
