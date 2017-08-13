import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDetailPageComponent } from './certificate-detail-page.component';

describe('CertificateDetailPageComponent', () => {
  let component: CertificateDetailPageComponent;
  let fixture: ComponentFixture<CertificateDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
