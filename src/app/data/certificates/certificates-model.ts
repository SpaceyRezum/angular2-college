class CertificateCategory {
	name: string;
	url: string;
	imgUrl: string;
	overview: string;
	certificates: Array<Certificate>;
}

class Certificate {
	name: string;
	url: string;
	category: string;
	duration: number;
	certification: boolean;
	description: string;
	courses: Array<string>;
}

export {CertificateCategory, Certificate}; 