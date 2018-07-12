import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Certificate, CertificateCategory } from '../../data/certificates/certificates-model';
import { CertificateService } from '../../services/certificate.service';
declare let $: any;

@Component({
  selector: 'app-certificate-detail-page',
  templateUrl: './certificate-detail-page.component.html',
  styleUrls: ['./certificate-detail-page.component.scss'],
  providers: [CertificateService]
})
export class CertificateDetailPageComponent implements OnInit {
  specificCertificate: Certificate;
  otherCertificateCategories: CertificateCategory[];
  interestToPass: string;

  constructor(private route: ActivatedRoute, private _certificateService: CertificateService, private _router: Router) {
    route.params.subscribe(val => {
      $("html, body").animate({ scrollTop: 0 }, 600);
      this.specificCertificate = this._certificateService.getSpecificCertificate(this.route.snapshot.params['title']);
      this.otherCertificateCategories = this._certificateService.getCertificates();

      if (!this.specificCertificate) {
        this._router.navigate(['/page-not-found']);
      } else {
        this.interestToPass = "The following certificate: " + this.specificCertificate.name;
      }
    });
  }

  ngOnInit() {
  }

  navigateToCertificate(certificate) {
    if (certificate !== "") {
      this._router.navigate(['/certificates/', certificate]);
    }
  }
}
