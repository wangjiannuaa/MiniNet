import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AICommandHistoryList } from './aicommand-history-list.component';

describe('AICommandHistoryList', () => {
  let component: AICommandHistoryList;
  let fixture: ComponentFixture<AICommandHistoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AICommandHistoryList],
    }).compileComponents();

    fixture = TestBed.createComponent(AICommandHistoryList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
