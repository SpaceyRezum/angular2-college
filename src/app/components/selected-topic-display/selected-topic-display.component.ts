import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, transition, style, trigger } from '@angular/core';


import { Topic } from '../../data/topics/topics-model';

@Component({
  selector: 'app-selected-topic-display',
  templateUrl: './selected-topic-display.component.html',
  styleUrls: ['./selected-topic-display.component.scss'],
  animations: [
    trigger('animateSelectedTopic', [
        state('unselected', style({
          opacity: 0
        })),
        state('selected', style({
            opacity: 1
        })),
        transition('unselected => selected', animate('0.3s ease-in-out')),
    ])
  ]
})
export class SelectedTopicDisplayComponent {
  constructor(private router: Router) { }
  @Input() selectedTopicState: string;
  @Input() selectedTopic: Topic;
  @Output() onResetSelectedTopic = new EventEmitter;

  ngOnChanges() {
    if (this.selectedTopic) {
      this.selectedTopicState = 'unselected';
      setTimeout(() => this.animateSelectedTopic(), 100);
    }
  }

  navigateToTopic(topicRoute) {
  	this.router.navigate(['/topic', topicRoute]);
  }

	resetSelectedTopic() {
    this.selectedTopicState = 'unselected';
    setTimeout(() => this.onResetSelectedTopic.emit(), 400);
	}

  animateSelectedTopic() {
    this.selectedTopicState = 'selected';
  }
}
