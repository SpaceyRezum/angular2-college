import { Topic } from './topics-model';

export const TOPICS: Topic[] = [
	{ name: 'Change your Career', 
		urlName: 'change-career', 
		color: '#2f7b15', 
		content: 'This is the content for "Change your Career"', 
		imgUrl: 'assets/images/smaller-lady-working-diploma.jpg', 
		id: 1 
	},{ 
		name: 'Learn English', 
		urlName: 'english-as-second-language',
		color: '#0091ca', 
		content: 'This is the content for "Learn English"', 
		imgUrl: 'assets/images/smaller-learning-english-lady.jpg', 
		id: 2 
	},{ 
		name: 'Travel & Study in Canada', 
		urlName: 'travel-study-canada',
		color: '#756ddd', 
		content: 'This is the content for "Travel & Study in Canada"', 
		imgUrl: 'assets/images/smaller-canadian-landmarks-cn-tower.jpg', 
		id: 3 
	},{ 
		name: 'We train your employees', 
		urlName: 'employee-training',
		color: '#b74700', 
		content: 'This is the content for "we train your employees"', 
		imgUrl: 'assets/images/smaller-man-training-other-employees.jpg', 
		id: 4 
	}
]