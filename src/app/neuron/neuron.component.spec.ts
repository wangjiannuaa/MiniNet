import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Neuron } from './neuron.component';

describe('Neuron', () => {
  let component: Neuron;
  let fixture: ComponentFixture<Neuron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Neuron],
    }).compileComponents();

    fixture = TestBed.createComponent(Neuron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
