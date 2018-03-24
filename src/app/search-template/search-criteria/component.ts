import { Component, OnInit } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { SearchService} from '../../service/search-service';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})

export class SearchCriteriaComponent implements OnInit {

  public journeyType;
  public searchCriteria:any = {};
  public finalResult:any = {};
  public finalResultFlag:boolean = false;
  constructor(private api: SearchService) { 
 
  }
  ngOnInit() { }

  getJourneyType(event, journeyType) {
    event.preventDefault();
    this.journeyType = journeyType;
  }

  myOnChange(event){
  console.log("insideOnChange: "+event);
  let result;
  let finalLocal = _.cloneDeep(this.finalResult);

  result = _.map(finalLocal, data => {
    if(data.flightRate <= event.to && data.flightRate >= event.from){
      if(data.returnData){
        if(data.returnData.flightRate <= event.to && data.returnData.flightRate >= event.from){
          return data;
        }
      }
      else{
        delete data.returnData;
        return data;
      }
      
    }
  })
  result =  _.remove(result, undefined)
  this.api.saveSearchResults(result);
  console.log("saveSearchResults"+ result);
}

  search() {
    
    this.api.saveSearchResults(undefined);

    this.api.getFlightData().subscribe( data => {
      this.searchCriteria.departureDate = new Date(this.searchCriteria.departureDate);
      let depatureDate = (this.searchCriteria.departureDate.getMonth()+1) +'/' + this.searchCriteria.departureDate.getDate() + '/' + this.searchCriteria.departureDate.getFullYear();
      console.log("depatureDate:"+depatureDate);
      this.searchCriteria.returnDate = new Date(this.searchCriteria.returnDate);
      let returnDate = (this.searchCriteria.returnDate.getMonth()+1) +'/' + this.searchCriteria.returnDate.getDate() + '/' + this.searchCriteria.returnDate.getFullYear();
    
      let searchData = _.filter(data, {from: this.searchCriteria.originCity, to: this.searchCriteria.destinationCity, departDate:depatureDate});
      
      if( this.journeyType === 'return'){
        let returnSearchData = _.filter(data, {from: this.searchCriteria.destinationCity, to: this.searchCriteria.originCity, departDate:returnDate});
        let results;
        results = _.map(searchData, (result, index) => {
          result.returnData = returnSearchData[index];
          return result;
        })
        this.api.saveSearchResults(results);
        this.finalResult = results;
        this.finalResultFlag = true;
       
      }
      else {
        this.api.saveSearchResults(searchData);
        this.finalResult = searchData;
        this.finalResultFlag = true;
      }
    })
  }
}
