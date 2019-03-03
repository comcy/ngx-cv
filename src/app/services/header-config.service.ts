import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeaderConfigApi, ContactElement } from 'ngx-cv';

let name: string = 'Max Mustermann';
let picture: string = ''; // default image
let greeting: string = 'Hello my name is Max! I am a great guy!';


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