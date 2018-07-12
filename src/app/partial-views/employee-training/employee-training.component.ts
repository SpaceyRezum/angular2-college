import { Component, OnInit } from '@angular/core';
import { IntensivePackage } from '../../data/intensive-packages/intensive-packages-model';
import { IntensivePackageService } from '../../services/intensive-package.service';


@Component({
  selector: 'app-employee-training',
  templateUrl: './employee-training.component.html',
  styleUrls: ['./employee-training.component.scss'],
  providers: [IntensivePackageService]
})
export class EmployeeTrainingComponent implements OnInit {
	intensivePackages: IntensivePackage[];
	selectedIntensivePackage: IntensivePackage;
  displaySelectedIntensivePackage: boolean;
  durationInDays: number;
  durationInHours: number;
  interestToPass: string;

  constructor(private _intensivePackageService: IntensivePackageService) { 
    this.displaySelectedIntensivePackage = false;
  }

  ngOnInit() {
  	this.intensivePackages = this._intensivePackageService.getIntensivePackages();
  }

  selectPackage(selectedPackageName) {
    this.selectedIntensivePackage = this.intensivePackages.find(function(intensivePackage){
      return intensivePackage.name == selectedPackageName;
    });
    this.interestToPass = "Intensive package: " + this.selectedIntensivePackage.name;
    this.displaySelectedIntensivePackage = true;

    this.calculateTotalTime(this.selectedIntensivePackage);
  }

  calculateTotalTime(selectedPackage) {
    let arrayOfTimes = [];
    let resultInHours = 0;
    let resultInDays = 0;
    let hoursPerDay = 6;

    selectedPackage.certificatesIncluded.forEach(certificate => arrayOfTimes.push(certificate["length"]));
    arrayOfTimes.forEach(timeLength => resultInHours += timeLength);
    resultInDays = Math.ceil(resultInHours/hoursPerDay);
    this.durationInHours = resultInHours;
    this.durationInDays = resultInDays;
  }
}
