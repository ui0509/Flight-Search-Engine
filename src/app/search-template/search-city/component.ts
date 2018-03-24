import {Component,OnInit} from '@angular/core';
import {SelectorContext} from '@angular/compiler' ;
import { SearchService} from '../../service/search-service'; 

@Component({
    selector:'app-search-city',
    templateUrl :'./component.html',
    styleUrls: ['./component.scss']
})

export class SearchCityComponent implements OnInit{
    public searchCityDateData;
    constructor(private API:SearchService){}

    ngOnInit() {
        this.API.searchResultsAnnounced$.subscribe(searchCityResult => {
            this.searchCityDateData = searchCityResult;
            console.log("Data inside searchCityDateData"+ this.searchCityDateData);
        })
    }
}
