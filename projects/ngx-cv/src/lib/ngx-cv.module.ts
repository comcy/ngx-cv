import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FwBodyComponent } from './body/body.component';
import { FwContainerHeaderComponent } from './header/header.component';
import { FwContainerContactComponent } from './contact/contact.component';
import { FwContainerPracticeComponent } from './practice/practice.component';
import { FwContainerQualificationComponent } from './qualification/qualification.component';


@NgModule({
  providers: [],
  declarations: [
    FwBodyComponent,
    FwContainerHeaderComponent,
    FwContainerContactComponent,
    FwContainerPracticeComponent,
    FwContainerQualificationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FwBodyComponent,
    FwContainerHeaderComponent,
    FwContainerContactComponent,
    FwContainerPracticeComponent,
    FwContainerQualificationComponent
  ]
})
export class NgxCvModule { }
