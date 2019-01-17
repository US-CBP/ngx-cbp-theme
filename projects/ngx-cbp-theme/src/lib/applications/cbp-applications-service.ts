import {
  Observable,
  ReplaySubject
} from 'rxjs';
import { InjectionToken } from '@angular/core';

/**
 * Each application in the drop down and this application to refer by name/id etc.
 */
export class CBPApplication {
  public id: string;
  public description: string;
  public version ? : string;
  public context ? : string;
  constructor(public name ? : string, public href ? : string) {}
}

/**
 * Models list of applications, recents, favorites, currentApp etc so that subscribers can get everything in one subscription.
 */
export class CBPApplicationsData {
  public list: CBPApplication[] = [];
  public recents: CBPApplication[] = [];
  public favorites: CBPApplication[] = [];
  public currentApp: CBPApplication = new CBPApplication();
  public lastRetrieved: Date;
}

export abstract class CBPApplicationsService {
  protected currentApp: ReplaySubject < CBPApplication > = new ReplaySubject(1);

  /**
   * For any data fetching and initialization before other API can be called.
   * @returns Observable<CBPApplicationsData>
   */
  abstract getApplicationsData(): Observable < CBPApplicationsData > ;

  /**
   * To refresh data.
   * @returns Observable<void>
   */
  abstract refresh(): Observable < boolean > ;

  /**
   * To refresh data.
   * @returns CBPApplication[]
   */
  abstract search(token: string): CBPApplication[];


  /**
   * Removes recent.
   * @param CBPApplication recentApplication
   * @returns Observable<boolean>
   */
  abstract removeRecentApplication(recentApplication: CBPApplication): Observable < boolean > ;

  /**
   * Provides consumers to subscribe to current application so that they can do various things e.g. setting version etc.
   * @returns Observable<CBPApplication>
   */
  public getCurrentApp(): Observable < CBPApplication > {
    return this.currentApp;
  }

  public getApplicationsDirectoryUrl(): string {
    return window.location.origin;
  }
}

export const CBP_APPLICATIONS_SERVICE = new InjectionToken < CBPApplicationsService > ('cbp-applications-service');
