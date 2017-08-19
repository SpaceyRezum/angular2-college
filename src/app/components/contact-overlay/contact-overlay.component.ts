import { Component, Input, OnInit, HostListener } from '@angular/core';
import { animate, state, transition, style, trigger } from '@angular/core';


@Component({
  selector: 'app-contact-overlay',
  templateUrl: './contact-overlay.component.html',
  styleUrls: ['./contact-overlay.component.scss'],
  animations: [
  	trigger('animateContactFormOverlay', [
  	    state('false', style({
  	      opacity: 0, transform: 'scale(0.0)'
  	    })),
  	    state('true', style({
  	      opacity: 1, transform: 'scale(1.0)'
  	    })),
  	    transition('0 => 1', animate('0.3s ease-in-out')),
  	    transition('1 => 0', animate('0.3s ease-in-out'))
  	])
  ]
})
export class ContactOverlayComponent implements OnInit {
	contactFormOverlayDisplayed: boolean;
  interest: string;
  goBackButton: boolean;

  constructor() { 
    this.contactFormOverlayDisplayed = false;
    this.goBackButton = false;
  }

	@Input() interestToPass: string;
  @Input() needGoBackButton: boolean;
  
  @HostListener('document:keydown', ['$event'])
  disableContactFormOverlayOnEscape(event: KeyboardEvent) {
    if (this.contactFormOverlayDisplayed) {
      let x = event.keyCode;
      if (x === 27) {
        this.contactFormOverlayDisplayed = false;
      }  
    }
  }

  ngOnInit() {
    this.interest = this.interestToPass;
    if (this.needGoBackButton)
      this.goBackButton = this.needGoBackButton;
  }

  toggleContactFormOverlay() {
    this.contactFormOverlayDisplayed = !this.contactFormOverlayDisplayed;
  }

}
