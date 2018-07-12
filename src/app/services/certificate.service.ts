import { Injectable } from '@angular/core';
import { Certificate, CertificateCategory } from '../data/certificates/certificates-model';
import { CERTIFICATES } from '../data/certificates/certificates-content';

@Injectable()
export class CertificateService {
	getCertificates(): CertificateCategory[] {
		return CERTIFICATES;
	}

	getSpecificCertificate(certificateUrl: string): Certificate {
		let specificCertificate;

		CERTIFICATES.forEach(function(certificateCategory) {
			let imgUrl = certificateCategory.imgUrl;
			let categoryName = certificateCategory.name;
			let result = certificateCategory.certificates.find(function(certificate){
				return (certificate.url === certificateUrl);
			});
			
			if (result) {
				specificCertificate = result;
				specificCertificate.imgUrl = imgUrl;
				specificCertificate.category = categoryName;
				return;
			}
		});

		return specificCertificate;
	}
}