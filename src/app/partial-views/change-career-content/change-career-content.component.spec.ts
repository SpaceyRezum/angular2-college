import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCareerContentComponent } from './change-career-content.component';

describe('ChangeCareerContentComponent', () => {
  let component: ChangeCareerContentComponent;
  let fixture: ComponentFixture<ChangeCareerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCareerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCareerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
