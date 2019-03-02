import { Observable } from 'rxjs/Observable';

export abstract class HeaderConfigApi {

    getName: () => Observable<any>;

    getGreeting: () => Observable<any>;

    getPicture: () => Observable<any>;

}