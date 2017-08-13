import { Injectable } from '@angular/core';
import { IntensivePackage } from '../data/intensive-packages/intensive-packages-model';
import { INTENSIVE_PACKAGES } from '../data/intensive-packages/intensive-packages-content';

@Injectable()
export class IntensivePackageService {
	getIntensivePackages(): IntensivePackage[] {
		return INTENSIVE_PACKAGES;
	}

}
