import { Observable } from 'rxjs/Observable';

export class QualificationElement {
    date: string;
    description: string;
    location: string | null;
}

export abstract class QualificationConfigApi {

    getTitle: () => Observable<any>;

    getQualificationlist: () => Observable<Array<QualificationElement>>;

}