import {InjectionToken} from '@angular/core';
import {Subject} from 'rxjs/Subject';

/**
 * CBPUser class can be extended by the library users to include additional attributes.
 */
export class CBPUser {
    firstName: String;
    lastName: String;
}

/**
 * The implementation is beyond the scope of this library since it involves fetching the authenticated
 *  user who is accessing your application.
 * This service must be implemented by library users or by another CF components.
 */
export abstract class CBPUserService {

    /**
     * User may not loaded or since user may not be "logged in".
     * If not logged in it internally calls login()
     * @returns {Subject<CBPUser>}
     */
    abstract getUser(): Subject<CBPUser>;


    /**
     * Must be called to perform login when the user is not logged in.
     * @returns {Subject<CBPUser>}
     */
    abstract login(): Subject<CBPUser>;

    /**
     * Provide implementation for logout.
     * @returns {CBPUser}
     */
    abstract logout(): void;
}

/**
 * Injectable token that mus be provided by library users.
 * @type {InjectionToken<CBPUserService>}
 */
export const CBP_USER_SERVICE = new InjectionToken<CBPUserService>('cbp-user-service');
