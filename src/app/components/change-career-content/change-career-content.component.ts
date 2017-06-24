import { Component, Input, OnInit } from '@angular/core';
import { Certificate } from '../../data/certificates/certificates-model';
import { CertificateService } from '../../services/certificate.service';


@Component({
  selector: 'app-change-career-content',
  templateUrl: './change-career-content.component.html',
  styleUrls: ['./change-career-content.component.scss'],
  providers: [ CertificateService ]
})
export class ChangeCareerContentComponent implements OnInit {
  constructor(private _certificateService: CertificateService) { }
  @Input() selectedTopic: any;
  questionToQualify: any = {
  	"question1" : false,
  	"question2" : false,
  	"question3" : false,
  }
  qualifyForProgram: string = "unknown";
  scolarshipSelected: string = "";
  listOfScolarships: string[] = [
    "Single parent scholarship",
    "Newcomer scholarship",
    "Low income scholarship",
    "Disability scholarship",
    "First in family scholarship",
    "International student/study abroad scholarship",
    "Part time job scholarship",
    "Returning students scholarship",
    "Mom’s scholarship",
    "Senior Scholarship",
    "Refugees Scholarship",
    "Unemployed Scholarship",
    "Full-time employee scholarship",
    "Ontario Academic excellence scholarship"
  ];
  certificateContent: Certificate[]; 
  showCertificates: boolean = false;

  ngOnInit() {
    this.certificateContent = this._certificateService.getCertificates();
  }

  switchQualifyForProgramQuestion(questionKey) {
  	switch (questionKey) {
  		case 1: 
  			this.questionToQualify.question1 =! this.questionToQualify.question1;
  			break;
			case 2: 
				this.questionToQualify.question2 =! this.questionToQualify.question2;
				break;
			case 3: 
				this.questionToQualify.question3 =! this.questionToQualify.question3;
				break;
  	}
  }

  checkIfQualify() {
  	if (this.questionToQualify.question1 && this.questionToQualify.question2 && this.questionToQualify.question3) {
  		this.qualifyForProgram = "yes";
  	} else {
  		this.qualifyForProgram = "no";
  	}
  }

  toggleCertificates(scolarshipSelected) {
    if (scolarshipSelected != "") {
      this.showCertificates = true;
    }
  }

}
