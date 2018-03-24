import { Component, OnInit, Input } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { SearchService } from '../../service/search-service';
import * as _ from 'lodash';

@Component({
    selector: 'app-search-result',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SearchResultComponent implements OnInit {
    public searchData;
    public finalResult;
    
    constructor(private API: SearchService) { }
    ngOnInit() {
        this.API.searchResultsAnnounced$.subscribe(searchResult => {
            this.finalResult = searchResult;
            
        })
    }
}