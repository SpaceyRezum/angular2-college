import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-travel-study-canada',
  templateUrl: './travel-study-canada.component.html',
  styleUrls: ['./travel-study-canada.component.scss']
})
export class TravelStudyCanadaComponent {
  @Input() languageToDisplay: string;
  displayFrench = false;
  constructor() { }
  
  ngOnChanges() {
    if (this.languageToDisplay && this.languageToDisplay === 'french') {
      this.displayFrench = true;
    } else {
      this.displayFrench = false;
    }
  }
}
