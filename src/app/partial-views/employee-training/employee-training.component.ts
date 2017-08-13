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

  constructor(private _intensivePackageService: IntensivePackageService) { }

  ngOnInit() {
  	this.intensivePackages = this._intensivePackageService.getIntensivePackages();
  }

  selectPackage(selectedPackageName) {
  	this.selectedIntensivePackage = this.intensivePackages.find(function(intensivePackage){
      return intensivePackage.name === selectedPackageName;
    });
  }
}
