import { Injectable } from '@angular/core';
import { Certificate } from '../data/certificates/certificates-model';
import { CERTIFICATES } from '../data/certificates/certificates-content';

@Injectable()
export class CertificateService {
	getCertificates(): Certificate[] {
		return CERTIFICATES;
	}

	getSpecificCertificate(certificateUrl: string): Certificate {
		let specificCertificate;

		CERTIFICATES.forEach(function(certificateCategory) {
			let result = certificateCategory.certificates.find(function(certificate){
				return (certificate.url === certificateUrl);
			});
			
			if (result) {
				specificCertificate = result;
				return;
			}
		});

		return specificCertificate;
	}
}