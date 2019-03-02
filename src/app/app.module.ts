import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxCvModule, ContactConfigApi, HeaderConfigApi, PracticeConfigApi, QualificationConfigApi } from 'ngx-cv';

import { AppComponent } from './app.component';
import { ContactConfigService, PracticeConfigService, QualificationConfigService, HeaderConfigService } from './services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCvModule
  ],
  providers: [
    ContactConfigService,
    { provide: ContactConfigApi, useExisting: ContactConfigService },
    HeaderConfigService,
    { provide: HeaderConfigApi, useExisting: HeaderConfigService },
    PracticeConfigService,
    { provide: PracticeConfigApi, useExisting: PracticeConfigService },
    QualificationConfigService,
    { provide: QualificationConfigApi, useExisting: QualificationConfigService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
