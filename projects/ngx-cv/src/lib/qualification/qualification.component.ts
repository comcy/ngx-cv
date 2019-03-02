import { Component, OnInit } from '@angular/core';

import { QualificationConfigApi, QualificationElement } from 'fw/qualification/qualificationconfig-api';

@Component({
  selector: 'fw-container-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class FwContainerQualificationComponent implements OnInit {

  private title: string;
  private qualificationList: Array<QualificationElement>;

  constructor(private qualificationConfigApi: QualificationConfigApi) { }

  ngOnInit() {
    // Get configurated title.
    this.qualificationConfigApi.getTitle().subscribe(val => this.title = val);
    
    // Get defined practice elements.
    this.qualificationConfigApi.getQualificationlist().subscribe(val => this.qualificationList = val);
  }
}
