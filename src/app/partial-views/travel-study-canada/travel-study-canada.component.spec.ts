import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelStudyCanadaComponent } from './travel-study-canada.component';

describe('TravelStudyCanadaComponent', () => {
  let component: TravelStudyCanadaComponent;
  let fixture: ComponentFixture<TravelStudyCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelStudyCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelStudyCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
