import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CvBodyComponent } from './body/body.component';
import { CvContainerHeaderComponent } from './header/header.component';
import { CvContainerContactComponent } from './contact/contact.component';
import { CvContainerPracticeComponent } from './practice/practice.component';
import { CvContainerQualificationComponent } from './qualification/qualification.component';


@NgModule({
  providers: [],
  declarations: [
    CvBodyComponent,
    CvContainerHeaderComponent,
    CvContainerContactComponent,
    CvContainerPracticeComponent,
    CvContainerQualificationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    CvBodyComponent,
    CvContainerHeaderComponent,
    CvContainerContactComponent,
    CvContainerPracticeComponent,
    CvContainerQualificationComponent
  ]
})
export class NgxCvModule { }
