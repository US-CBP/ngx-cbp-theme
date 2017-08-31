import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class CBPApplication {
    public version: String;
    public description: String;
    constructor(public name: String, public href: String) {};
}

export class CBPApplicationsData {
    public list: CBPApplication[] = [];
    public recents: CBPApplication[] = [];
    public favorites: CBPApplication[] = [];
    public currentApp: CBPApplication = new CBPApplication('default', null);
    public lastRetrieved: Date;

    constructor() {};
}

export abstract class CBPApplicationsService {
    /**
     * For any data fetching and initialization before other API can be called.
     * @returns {Observable<CBPApplicationsData>}
     */
    abstract getApplicationsData(): Observable<CBPApplicationsData>;

    /**
     * To refresh data.
     * @returns {Observable<void>}
     */
    abstract refresh(): Observable<boolean>;

    /**
     * To refresh data.
     * @returns {Observable<void>}
     */
    abstract search(token: string): Observable<CBPApplication[]>;

    /**
     * Removes favorite.
     * @param {CBPApplication} favoriteApplication
     * @returns {Observable<void>}
     */
    abstract removeFavoriteApplication(favoriteApplication: CBPApplication): Observable<boolean>;

    /**
     * Removes recent.
     * @param {CBPApplication} recentApplication
     * @returns {Observable<boolean>}
     */
    abstract removeRecentApplication(recentApplication: CBPApplication): Observable<boolean>;
}

export const CBP_APPLICATIONS_SERVICE = new InjectionToken<CBPApplicationsService>('cbp-applications-service');
