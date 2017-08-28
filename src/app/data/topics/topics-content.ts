import { Topic } from './topics-model';

export const TOPICS: Topic[] = [
	{ name: 'Change your Career', 
		urlName: 'change-career', 
		color: '#2f7b15', 
		content: {
			advantages: [
			{
				title: 'Get a Diploma Quickly',
				icon: 'assets/images/svg/diploma.svg',
				ideas: ['Receive a Diploma in less than a year!']
			},{
				title: 'On-Demand Positions',
				icon: 'assets/images/svg/customer-service.svg',
				ideas: ['Our Diploma programs provide the skills for on demand positions in the Canadian economy.']
			},{
				title: 'Laid Off? Potentially Study for Free',
				icon: 'assets/images/svg/get-money.svg',
				ideas: ['The Government of Canada will cover free tuition and other school related expenses for laid off individuals to study and get a diploma. You also get to keep your unemployment benefits!']
			},{
				title: 'Flexible Scheduling',
				icon: 'assets/images/svg/clock.svg',
				ideas: ['Our course schedules are built around you!']
			}]
		}, 
		imgUrl: 'assets/images/smaller-lady-working-diploma.jpg', 
		id: 1
	},{ 
		name: 'Learn English', 
		urlName: 'english-as-second-language',
		color: '#0091ca', 
		content: {
			advantages: [
			{
				title: 'Learn to Communicate',
				icon: 'assets/images/svg/business-presentation.svg',
				ideas: ['Learn the fundamentals of the English language']
			},{
				title: 'Flexible Scheduling',
				icon: 'assets/images/svg/clock.svg',
				ideas: ['Our course schedules are built around you!']
			},{
				title: 'Working with Peers',
				icon: 'assets/images/svg/network.svg',
				ideas: ['We pride ourselves in creating an interactive and fun classroom environment!']
			}]
		}, 
		imgUrl: 'assets/images/smaller-learning-english-lady.jpg', 
		id: 2 
	},{ 
		name: 'Travel & Study in Canada', 
		urlName: 'travel-study-canada',
		color: '#756ddd', 
		content: {
			advantages: [
			{
				title: 'We Provide Accommodation',
				icon: 'assets/images/svg/apartment.svg',
				ideas: ['We will provide housing accommodations for International Students']
			},{
				title: 'Pick Your Course',
				icon: 'assets/images/svg/clipboard.svg',
				ideas: ['Select the certificate that you are the most interested in!']
			},{
				title: 'Be a Tourist',
				icon: 'assets/images/svg/smartphone.svg',
				ideas: ['We will help you explore Toronto\'s many tourist attractions and nightlife.']
			}]
		}, 
		imgUrl: 'assets/images/smaller-canadian-landmarks-cn-tower.jpg', 
		id: 3 
	},{ 
		name: 'We train your employees', 
		urlName: 'employee-training',
		color: '#b74700', 
		content: {
			advantages: [
			{
				title: 'Skilled Training',
				icon: 'assets/images/svg/test.svg',
				ideas: ['We train your employees so you\'ll have more time to focus on your business.']
			},{
				title: 'Government Grants',
				icon: 'assets/images/svg/bank.svg',
				ideas: ['There are multiple Canadian Government grants that subsidize training at post-secondary institutions for employers.']
			},{
				title: 'Flexible Scheduling',
				icon: 'assets/images/svg/clock.svg',
				ideas: ['Our course schedules are built around you!']
			}]
		}, 
		imgUrl: 'assets/images/smaller-man-training-other-employees.jpg', 
		id: 4 
	}
]