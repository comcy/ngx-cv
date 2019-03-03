import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PracticeConfigApi, PracticeElement } from 'ngx-cv';


let title: string = 'Practice';
let practiceList: Array<PracticeElement> = [
    {date: '02/2002 - today',
    description: 'Judge some bad guys work',
    location: 'Gotham City'
}
];


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