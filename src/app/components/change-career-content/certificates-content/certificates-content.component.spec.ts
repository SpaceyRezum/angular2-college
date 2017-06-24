import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesContentComponent } from './certificates-content.component';

describe('CertificatesContentComponent', () => {
  let component: CertificatesContentComponent;
  let fixture: ComponentFixture<CertificatesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
