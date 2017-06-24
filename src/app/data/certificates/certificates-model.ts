export class Certificate {
	name: string;
	overview: string;
	certificates: Array<{
		name: string,
		duration: number,
		certification: boolean;
		description: string;
		courses: string[];
	}>
}