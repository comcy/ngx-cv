import { Observable } from 'rxjs';

export class PracticeElement {
    date: string;
    description: string;
    location: string;
}

export abstract class PracticeConfigApi {

    getTitle: () => Observable<any>;

    getPracticelist: () => Observable<Array<PracticeElement>>;

}