import {NgModule} from '@angular/core';
import { SearchCityComponent} from './component';
import {CommonModule} from '@angular/common';
import { SearchService} from '../../service/search-service';

@NgModule({
    declarations:[SearchCityComponent],
    imports:[CommonModule],
    exports: [SearchCityComponent],
    providers: [SearchService]
})

export class SearchCityModule{
    
}