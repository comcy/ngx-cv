import { Observable } from 'rxjs';
import { ContactElement } from './contact-element';

export abstract class ContactConfigApi {

    getTitle: () => Observable<any>;

    getContactlist: () => Observable<Array<ContactElement>>;

}
