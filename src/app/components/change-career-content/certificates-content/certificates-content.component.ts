import { Component, Input, Output, OnInit } from '@angular/core';

import { Certificate } from '../../../data/certificates/certificates-model';

@Component({
  selector: 'app-certificates-content',
  templateUrl: './certificates-content.component.html',
  styleUrls: ['./certificates-content.component.scss']
})
export class CertificatesContentComponent implements OnInit {

  constructor() { }
  @Input() certificates: Certificate[];

  ngOnInit() {
  	
  }

}
