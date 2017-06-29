import { Injectable } from '@angular/core';
import { Diploma } from '../data/diplomas/diplomas-model';
import { DIPLOMAS } from '../data/diplomas/diplomas-content';

@Injectable()
export class DiplomaService {
	getDiplomas(): Diploma[] {
		return DIPLOMAS;
	}

	getSpecificDiploma(diplomaUrl: string): Diploma {
		let returnDiploma = DIPLOMAS.filter( (diploma) => { if (diploma.url === diplomaUrl) return diploma });
		return returnDiploma[0];
	}
}
