import { Injectable } from '@angular/core';
import { Certificate } from '../data/certificates/certificates-model';
import { CERTIFICATES } from '../data/certificates/certificates-content';

@Injectable()
export class CertificateService {
	getCertificates(): Certificate[] {
		return CERTIFICATES;
	}
}