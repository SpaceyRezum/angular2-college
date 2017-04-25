import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Topic } from '../../data/topics/topics-model';

@Component({
  selector: 'app-selected-topic-display',
  templateUrl: './selected-topic-display.component.html',
  styleUrls: ['./selected-topic-display.component.scss']
})
export class SelectedTopicDisplayComponent {
  constructor(private router: Router) { }
  @Input() selectedTopic: Topic;
  @Output() onResetSelectedTopic = new EventEmitter;

  navigateToTopic(topicRoute){
  	this.router.navigate(['/topic', topicRoute]);
  }

	resetSelectedTopic() {
		this.onResetSelectedTopic.emit();
	}
}
