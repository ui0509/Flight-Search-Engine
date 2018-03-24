import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { SearchCriteriaComponent } from './component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SearchService} from '../../service/search-service';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

@NgModule({
    declarations:[ SearchCriteriaComponent ],
    imports:[CommonModule,FormsModule,HttpModule,IonRangeSliderModule],
    exports:[SearchCriteriaComponent],
    providers: [SearchService]
})
export class SearchCriteriaModule {}