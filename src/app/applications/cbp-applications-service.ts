import {Observable} from 'rxjs/Observable';
import {InjectionToken} from '@angular/core';

/**
 * Each application in the drop down and this application to refer by name/id etc.
 */
export class CBPApplication {
    public id: String;
    public description: String;
    public version: String;
    constructor(public name?: String, public href?: String) {}
}

/**
 * Models list of applications, recents, favorites etc.
 */
export class CBPApplicationsData {
    public list: CBPApplication[] = [];
    public recents: CBPApplication[] = [];
    public favorites: CBPApplication[] = [];
    public currentApp: CBPApplication = new CBPApplication();
    public lastRetrieved: Date;
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
     * @returns {CBPApplication[]}
     */
    abstract search(token: string): CBPApplication[];

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

    /**
     * Sets the current application.
     * Consuming Applications should register during module initialization.
     * Default value is a dummy value - KitchenSink
     * @param {CBPApplication} currentApplication
     */
    abstract registerCurrentApplication(currentApplication: CBPApplication): void;
}

export const CBP_APPLICATIONS_SERVICE = new InjectionToken<CBPApplicationsService>('cbp-applications-service');
