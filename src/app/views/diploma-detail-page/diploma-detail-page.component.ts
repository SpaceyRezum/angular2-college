import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Diploma } from '../../data/diplomas/diplomas-model';
import { DiplomaService } from '../../services/diploma.service';

@Component({
  selector: 'app-diploma-detail-page',
  templateUrl: './diploma-detail-page.component.html',
  styleUrls: ['./diploma-detail-page.component.scss'],
  providers: [DiplomaService]
})
export class DiplomaDetailPageComponent implements OnInit {
	specificDiploma: Diploma;
	otherDiplomas: Array<Diploma>;

  constructor(private route: ActivatedRoute, private _diplomaService: DiplomaService, private _router: Router) { }

  ngOnInit() {
  	this.specificDiploma = this._diplomaService.getSpecificDiploma(this.route.snapshot.params['title']);
  	this.otherDiplomas = this._diplomaService.getDiplomas().filter(diploma => diploma !== this.specificDiploma);
  }

  navigateToDiploma(diploma) {
    if (diploma !== "") {
      this._router.navigate(['/diplomas/', diploma]);
    }
  }

}
