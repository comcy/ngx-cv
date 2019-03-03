import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactConfigApi, ContactElement } from 'ngx-cv';


// Set title.
let title: string = 'Kontakt';

// Set contact info attributes as list.
let contactList: Array<ContactElement> = [
    {
        icon: 'call',
        contactText: '(+49) 000 1111 22222'
    },
    {
        icon: 'mail',
        contactText: 'max@mustermann.de'
    }
];


@Injectable()
export class ContactConfigService implements ContactConfigApi {

    constructor() { }


    getTitle(): Observable<any> {
        return of(title);
    }

    getContactlist(): Observable<Array<ContactElement>> {
        return of(contactList);
    }

}