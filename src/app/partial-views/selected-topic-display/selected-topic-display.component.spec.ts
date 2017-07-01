import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTopicDisplayComponent } from './selected-topic-display.component';

describe('SelectedTopicDisplayComponent', () => {
  let component: SelectedTopicDisplayComponent;
  let fixture: ComponentFixture<SelectedTopicDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTopicDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTopicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
