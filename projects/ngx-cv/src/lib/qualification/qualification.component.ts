import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QualificationConfigApi } from './shared/qualification-config.api';
import { QualificationElement } from './shared/qualification-element';

@Component({
  selector: 'cv-container-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvContainerQualificationComponent implements OnInit {

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
