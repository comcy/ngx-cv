import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { QualificationElement, QualificationConfigApi, ContactElement } from 'ngx-cv';


// Set title.
let title: string = "Qualification";

// Set contact info attributes as list.
let qualificationList: Array<QualificationElement> = [

];


@Injectable()
export class QualificationConfigService implements QualificationConfigApi {

    constructor() { }


    getTitle(): Observable<any> {
        return of(title);
    }

    getQualificationlist(): Observable<Array<QualificationElement>> {
        return of(qualificationList);
    }

}