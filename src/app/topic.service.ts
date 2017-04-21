import { Injectable } from '@angular/core';
import { Topic } from './data/topics/topics-model';
import { TOPICS } from './data/topics/topics-content';

@Injectable()
export class TopicService {
  getTopics(): Topic[] {
  	return TOPICS;
  };
}
