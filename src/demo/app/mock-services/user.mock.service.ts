
import {Injectable} from '@angular/core';
import {CBPUser, CBPUserService} from '../../../app/user/user';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class MockUserService implements  CBPUserService {

    private subject: ReplaySubject<CBPUser> = new ReplaySubject<CBPUser>();
    private loggedIn = false;

    constructor() {};

    getUser(): Subject<CBPUser> {
        return this.subject;
    }
    login(): Subject<CBPUser> {
        setTimeout(() => {
            this.loggedIn = true;
            let user = new CBPUser();
            user.firstName = 'First';
            user.lastName = 'LastName';
            this.subject.next(user);
            // this.subject.complete();
        }, 3000);
        return this.subject;
    }


    logout(): void {
        this.loggedIn = false;
        this.subject.next(null);
        console.log('mock logout');
    }
}
