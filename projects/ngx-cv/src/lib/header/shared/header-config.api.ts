import { Observable } from 'rxjs';

export abstract class HeaderConfigApi {

    getName: () => Observable<any>;

    getGreeting: () => Observable<any>;

    getPicture: () => Observable<any>;

}