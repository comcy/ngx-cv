import { Observable } from 'rxjs/Observable';

export class ContactElement {
    icon: string;
    contactText: string;
}

export abstract class ContactConfigApi {

    getTitle: () => Observable<any>;

    getContactlist: () => Observable<Array<ContactElement>>;

}