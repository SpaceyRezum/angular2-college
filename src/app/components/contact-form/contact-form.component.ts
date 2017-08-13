import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactFormData } from "../../data/contact-form-data/contact-form-data-model";
declare let $: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
	inputData: ContactFormData;
	submitted: boolean;
	interest: string;
	isOverlay: boolean;

  constructor() {
  	this.inputData = new ContactFormData;
  	this.submitted = false;
  }

  @Input() passedInterest: string;
  @Input() overlayWindow: boolean;
	@Output() closeOverlayWhenSubmit = new EventEmitter();

	ngOnInit() {
		this.inputData.interest = this.passedInterest || "Interest not mentioned";
		this.isOverlay = this.overlayWindow || false;
	}

	closeOverlay() {
		this.closeOverlayWhenSubmit.emit();
	}

	sendEmail(inputData) {
		this.submitted = true;
		// $.ajax({ 
		// 	type: "post",
		// 	url: 'assets/scripts/contact-us.php',
		// 	data: inputData,
		// 	success: function(data) {
		// 		console.log('script works', data);
		// 	}, 
		// 	error: function(err) {
		// 		console.log(err);
		// 	}
		// })
	}
}
