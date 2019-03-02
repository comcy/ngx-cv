import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HeaderConfigApi, ContactElement } from 'ngx-cv';

let name: string = 'Christian Silfang';
let picture: string = 'no_avatar.jpg';
let greeting: string = 'Hallo!';

@Injectable()
export class HeaderConfigService implements HeaderConfigApi {

    constructor() { }


    getName(): Observable<any> {
        return of(name);
    }

    getGreeting(): Observable<any> {
        return of(greeting);
    }

    getPicture(): Observable<any> {
        return of(picture);
    }

}