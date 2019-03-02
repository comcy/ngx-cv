import { Observable } from 'rxjs';
import { PracticeElement } from './practice-element';

export abstract class PracticeConfigApi {

    getTitle: () => Observable<any>;

    getPracticelist: () => Observable<Array<PracticeElement>>;

}
