import {Component, Inject, Input, OnInit} from '@angular/core';
import {CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsService} from '../cbp-applications-service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Component({
        selector: 'cbp-applications-search',
        templateUrl: './applications-search.component.html',
        styleUrls: ['./applications-search.component.scss']
    })
    export class CBPApplicationsSearchComponent implements OnInit {

    @Input()
    isApplicationsExpanded: boolean;

    searchTokenControl: FormControl = new FormControl();
    searchResultsApplications: Observable<CBPApplication[]>;


    private searchResults: CBPApplication[] = [];

    constructor(@Inject(CBP_APPLICATIONS_SERVICE) public applicationsService: CBPApplicationsService) {}

    ngOnInit() {
        this.searchResultsApplications = this.searchTokenControl.valueChanges
            .startWith(null)
            .map(token => this._search(token));
    }

    private _search(token: string) {
        if (token) {
            const allResults = this.applicationsService.search(token);
            if (allResults) {
                this.searchResults = allResults.filter((val, index) => { return index < 5; })
            }
        } else {
            this.searchResults.length = 0;
        }
        return this.searchResults;
    }
    stopPropagation($event: Event) {
        $event.stopPropagation();
    }

}
