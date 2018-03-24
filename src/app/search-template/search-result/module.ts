import { NgModule} from '@angular/core';
import { SearchResultComponent} from './component';
import { CommonModule} from '@angular/common';

@NgModule({
    declarations:[SearchResultComponent],
    imports:[CommonModule],
    exports:[SearchResultComponent]
})

export class SearchResultModule{

}