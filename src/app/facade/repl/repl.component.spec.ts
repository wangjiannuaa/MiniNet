import { ComponentFixture, TestBed } from '@angular/core/testing';
import { REPL } from './repl.component';

describe('REPL', () => {
  let component: REPL;
  let fixture: ComponentFixture<REPL>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [REPL],
    }).compileComponents();

    fixture = TestBed.createComponent(REPL);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
