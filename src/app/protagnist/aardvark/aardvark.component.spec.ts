import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aardvark } from './aardvark.component';

describe('Aardvark', () => {
  let component: Aardvark;
  let fixture: ComponentFixture<Aardvark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aardvark],
    }).compileComponents();

    fixture = TestBed.createComponent(Aardvark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
