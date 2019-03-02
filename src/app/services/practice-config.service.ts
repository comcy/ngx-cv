import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { PracticeConfigApi, PracticeElement } from 'ngx-cv';


let title: string = 'TITEL';
let practiceList: Array<PracticeElement> = null;


@Injectable()
export class PracticeConfigService implements PracticeConfigApi {

    constructor() { }

    getTitle(): Observable<any> {
        return of(title);
    }

    getPracticelist(): Observable<Array<PracticeElement>> {
        return of(practiceList);
    }

}