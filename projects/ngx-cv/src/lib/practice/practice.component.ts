import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PracticeConfigApi, PracticeElement } from './shared';

@Component({
  selector: 'cv-container-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvContainerPracticeComponent implements OnInit {

  title: string;
  practiceList: Array<PracticeElement>;

  constructor(private practiceConfigApi: PracticeConfigApi) { }

  ngOnInit() {
    // Get configurated title.
    this.practiceConfigApi.getTitle().subscribe(val => this.title = val);
    
    // Get defined practice elements.
    this.practiceConfigApi.getPracticelist().subscribe(val => this.practiceList = val);
  }
}
