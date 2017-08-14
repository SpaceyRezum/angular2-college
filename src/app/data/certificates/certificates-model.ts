export class Certificate {
	name: string;
	url: string;
	imgUrl: string;
	overview: string;
	certificates: Array<{
		name: string,
		url: string,
		duration: number,
		certification: boolean;
		description: string;
		courses: string[];
	}>
}