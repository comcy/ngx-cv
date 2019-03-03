import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderConfigApi } from './shared/header-config.api';

@Component({
  selector: 'cv-container-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvContainerHeaderComponent implements OnInit {

  name: string;
  greeting: string;
  picture: string;

  constructor(private headerConfigApi: HeaderConfigApi) { }

  ngOnInit() {
    // Get configurated name.
    this.headerConfigApi.getName().subscribe(val => this.name = val);

    // Get configurated greeting text.
    this.headerConfigApi.getGreeting().subscribe(val => this.greeting = val);

    // Get name  of the picture in assests folder. 
    this.headerConfigApi.getPicture().subscribe(val => {
      this.picture = val;
    });
  }
}
