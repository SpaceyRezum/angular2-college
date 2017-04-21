import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../data/topics/topics-model';

@Component({
  selector: 'app-topic-box',
  templateUrl: './topic-box.component.html',
  styleUrls: ['./topic-box.component.scss']
})

export class TopicBoxComponent {
  constructor() { }
  @Input() topic: Topic;
  @Output() onSelectTopic = new EventEmitter();
  selectTopic(topic) {
  	this.onSelectTopic.emit(topic);
  };
}
