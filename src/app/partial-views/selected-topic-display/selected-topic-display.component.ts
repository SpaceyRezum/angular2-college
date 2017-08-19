import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, transition, style, trigger } from '@angular/core';
declare let $: any;

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
        transition('selected => unselected', animate('0.3s ease-in-out'))
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
    this.scrollToTop();
    setTimeout(() => this.onResetSelectedTopic.emit(), 1000);
	}

  animateSelectedTopic() {
    this.selectedTopicState = 'selected';
  }

  scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
  }
}