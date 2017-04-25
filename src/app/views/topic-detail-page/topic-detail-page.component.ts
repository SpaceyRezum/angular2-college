import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Topic } from '../../data/topics/topics-model';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topic-detail-page',
  templateUrl: './topic-detail-page.component.html',
  styleUrls: ['./topic-detail-page.component.scss'],
  providers: [ TopicService ]
})
export class TopicDetailPageComponent implements OnInit {
	topicToDisplay: any;
	topicName: string;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router, 
  	private topicService: TopicService) { }

  ngOnInit() {
  	this.topicName = this.route.snapshot.params['name'];
  	this.retrieveTopicDetails(this.topicName);
  }

  retrieveTopicDetails(topicName) {
  	this.topicService.getTopics(topicName)
  	.then(topic => {
      this.topicToDisplay = topic[0];
    })
  	.catch(err => this.router.navigate(['/page-not-found']));
  }
}
