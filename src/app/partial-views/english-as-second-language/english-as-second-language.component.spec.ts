import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishAsSecondLanguageComponent } from './english-as-second-language.component';

describe('EnglishAsSecondLanguageComponent', () => {
  let component: EnglishAsSecondLanguageComponent;
  let fixture: ComponentFixture<EnglishAsSecondLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishAsSecondLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishAsSecondLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
