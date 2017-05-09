import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../data/topics/topics-model';

@Component({
  selector: 'app-topic-box',
  templateUrl: './topic-box.component.html',
  styleUrls: ['./topic-box.component.scss']
})

export class TopicBoxComponent {
  constructor() { }
  @Input() topic: Topic;
  @Input() selectedTopic: Topic;
  @Output() onSelectTopic = new EventEmitter();

  selectTopic(topic) {
  	this.onSelectTopic.emit(topic);
  };

  checkIfSelectedTopic() {
  	if (!this.selectedTopic) {
  		// if selectedTopic not yet selected, I want all my components to keep their color, hence true.
  		return true;
  	} else if (this.topic === this.selectedTopic) {
  		return true;
  	} else {
  		return false;
  	}
  }
}
