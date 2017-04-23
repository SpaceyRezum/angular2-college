import { Component, OnInit } from '@angular/core';
import { Topic } from '../../data/topics/topics-model';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ TopicService ]
})
export class HomepageComponent implements OnInit {
	constructor(private topicService: TopicService) { };

  topics = this.topicService.getTopics();
  selectedTopic: Topic;

  ngOnInit() {

  }

  selectTopic(topic: Topic) {
    this.selectedTopic = topic;
    

  	console.log('This is the topic I am selecting', this.selectedTopic);
  }

  resetSelectedTopic() {
  	this.selectedTopic = null;
  	console.log('Topic unselected');  
  }
};