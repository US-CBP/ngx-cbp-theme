
import {map, startWith} from 'rxjs/operators';
import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsService} from '../cbp-applications-service';
import {FormControl} from '@angular/forms';


import {Observable} from 'rxjs';

@Component({
        selector: 'cbp-applications-search',
        templateUrl: './applications-search.component.html',
        styleUrls: ['./applications-search.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
    export class CBPApplicationsSearchComponent implements OnInit {

    @Input()
    isApplicationsExpanded: boolean;

    searchTokenControl: FormControl = new FormControl();
    searchResultsApplications: Observable<CBPApplication[]>;


    searchResults: CBPApplication[] = [];

    constructor(@Inject(CBP_APPLICATIONS_SERVICE) public applicationsService: CBPApplicationsService) {}

    ngOnInit() {
        this.searchResultsApplications = this.searchTokenControl.valueChanges.pipe(
            startWith(null),
            map(token => this._search(token)));
    }

    private _search(token: string) {
        if (token) {
            const allResults = this.applicationsService.search(token);
            if (allResults) {
                this.searchResults = allResults.filter((val, index) => { if (val) {return index < 5; } })
            }
        } else {
            this.searchResults.length = 0;
        }
        return this.searchResults;
    }
    stopPropogation($event: Event) {
        $event.stopPropagation();
    }

}
