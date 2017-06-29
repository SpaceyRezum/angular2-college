import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaDetailPageComponent } from './diploma-detail-page.component';

describe('DiplomaDetailPageComponent', () => {
  let component: DiplomaDetailPageComponent;
  let fixture: ComponentFixture<DiplomaDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
