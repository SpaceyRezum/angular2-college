import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { Topic } from '../../data/topics/topics-model';

@Component({
  selector: 'app-selected-topic-display',
  templateUrl: './selected-topic-display.component.html',
  styleUrls: ['./selected-topic-display.component.scss']
})
export class SelectedTopicDisplayComponent {
  constructor() { }
  @Input() selectedTopic: Topic;
  @Output() onResetSelectedTopic = new EventEmitter;

	resetSelectedTopic() {
		this.onResetSelectedTopic.emit();
	}
}
