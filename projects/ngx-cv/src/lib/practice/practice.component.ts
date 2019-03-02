import { Component, OnInit } from '@angular/core';
import { PracticeConfigApi, PracticeElement } from './practiceconfig-api';

@Component({
  selector: 'fw-container-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class FwContainerPracticeComponent implements OnInit {

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
