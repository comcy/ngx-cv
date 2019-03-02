import { Observable } from 'rxjs';
import { QualificationElement } from './qualification-element';

export abstract class QualificationConfigApi {

    getTitle: () => Observable<any>;

    getQualificationlist: () => Observable<Array<QualificationElement>>;

}