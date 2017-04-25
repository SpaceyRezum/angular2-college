import { Injectable } from '@angular/core';
import { Topic } from '../data/topics/topics-model';
import { TOPICS } from '../data/topics/topics-content';

@Injectable()
export class TopicService {
  getTopics(topicName): Promise<Topic[]> {
  	if (topicName) {
  		let topic = TOPICS.filter(topic => topic.urlName === topicName);
  		return Promise.resolve(topic)
  	} else {
 			return Promise.resolve(TOPICS);
 		}
	}
}
