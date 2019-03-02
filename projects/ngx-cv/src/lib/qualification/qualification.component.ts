import { Component, OnInit } from '@angular/core';
import { QualificationConfigApi } from './shared/qualification-config.api';
import { QualificationElement } from './shared/qualification-element';

@Component({
  selector: 'fw-container-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class FwContainerQualificationComponent implements OnInit {

  title: string;
  qualificationList: Array<QualificationElement>;

  constructor(private qualificationConfigApi: QualificationConfigApi) { }

  ngOnInit() {
    // Get configurated title.
    this.qualificationConfigApi.getTitle().subscribe(val => this.title = val);

    // Get defined practice elements.
    this.qualificationConfigApi.getQualificationlist().subscribe(val => this.qualificationList = val);
  }
}
