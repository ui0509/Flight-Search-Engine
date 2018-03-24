import {Injectable} from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

@Injectable()
    export class SearchService{
        constructor(private http: Http){
           
        }
           // Observable string sources
    private searchResults = new Subject<any>();
    readonly isLoadingFlag : boolean = false;
    // Observable string streams
    searchResultsAnnounced$ = this.searchResults.asObservable();
  
        getFlightData(){
            let apiUrl = '../../assets/data/flight-data.json';
            return this.http.get(apiUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
        saveSearchResults(searchData){
            this.searchResults.next(searchData);
        }
       

    }
