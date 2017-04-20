import { Component } from '@angular/core'; 

export class Topic {
	name: string;
	color: string;
	content: string;
	imgUrl: string;
	id: number;
}

const TOPICS: Topic[] = [
	{ name: 'Second Education', color: 'orange', content: 'This is the content for Second Education Topic Box', imgUrl: 'img.jpg', id: 1 },
	{ name: 'English as Second Language', color: 'green', content: 'This is the content for ESL Topic Box', imgUrl: 'img.jpg', id: 2 },
	{ name: 'Third Education', color: 'purple', content: 'This is the content for Third Education Topic Box', imgUrl: 'img.jpg', id: 3 },
	{ name: 'English as Third Language', color: 'blue', content: 'This is the content for English as Third Language Topic Box', imgUrl: 'img.jpg', id: 4 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'What\s up with some app!';
  topics = TOPICS;
  selectedTopic: Topic;

  onSelect(topic: Topic) {
  	this.selectedTopic = topic;
  	console.log('this is the topic I am selecting', this.selectedTopic);
  }

  onResetSelectedTopic() {
  	this.selectedTopic = null;
  	console.log('selectedTopic disapeared');  
  }
};
