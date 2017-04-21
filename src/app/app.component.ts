import { Component } from '@angular/core';
import { Topic } from './data/topics/topics-model';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ TopicService ]
})
export class AppComponent {
	constructor(private topicService: TopicService) { };

  topics = this.topicService.getTopics();
  selectedTopic: Topic;

  selectTopic(topic: Topic) {
  	this.selectedTopic = topic;
  	console.log('This is the topic I am selecting', this.selectedTopic);
  }

  resetSelectedTopic() {
  	this.selectedTopic = null;
  	console.log('Topic unselected');  
  }
};
