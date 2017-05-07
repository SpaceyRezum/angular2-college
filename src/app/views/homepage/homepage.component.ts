import { Component, OnInit } from '@angular/core';
import { Topic } from '../../data/topics/topics-model';
import { TopicService } from '../../services/topic.service';
import { SimplePageScrollService } from 'ng2-simple-page-scroll';
declare let $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ TopicService ]
})
export class HomepageComponent implements OnInit {
	constructor(private topicService: TopicService) { };
  selectedTopic: Topic;
  topics = [];
  selectedTopicState: string = 'unselected';

  ngOnInit() {
    this.topicService.getTopics().then(topics => this.topics = topics);
  }

  selectTopic(topic: Topic) {
    this.selectedTopic = topic;
    console.log('This is the topic I am selecting', this.selectedTopic);
    this.scrollToSelectedTopicContainer();
  }

  resetSelectedTopic() {
    this.selectedTopic = null;
    console.log('Topic unselected');
  }

  scrollToSelectedTopicContainer() {
    $('html, body').animate({
        scrollTop: $("app-selected-topic-display").offset().top
    }, 1000);
  }
};
