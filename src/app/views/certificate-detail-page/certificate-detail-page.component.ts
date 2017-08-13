import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Certificate } from '../../data/certificates/certificates-model';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificate-detail-page',
  templateUrl: './certificate-detail-page.component.html',
  styleUrls: ['./certificate-detail-page.component.scss'],
  providers: [CertificateService]
})
export class CertificateDetailPageComponent implements OnInit {

	specificCertificate: Certificate;

	constructor(private route: ActivatedRoute, private _certificateService: CertificateService) { }

	ngOnInit() {
		this.specificCertificate = this._certificateService.getSpecificCertificate(this.route.snapshot.params['title']);
  }
}
