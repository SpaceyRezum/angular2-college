import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  constructor() { }
	@Output() onOverlayCloseButtonClick = new EventEmitter();

	closeOverlay() {
		this.onOverlayCloseButtonClick.emit();
	}
}
