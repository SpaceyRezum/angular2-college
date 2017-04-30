import { Injectable } from '@angular/core';
import { Topic } from '../data/topics/topics-model';
import { TOPICS } from '../data/topics/topics-content';

@Injectable()
export class TopicService {
  getTopics(): Promise<Topic[]> {
		return Promise.resolve(TOPICS);
	}

	getSpecificTopic(topicName): any {
		let filteredTopicArray = TOPICS.filter(topic => topic.urlName === topicName);
		return filteredTopicArray[0];
	}
}
