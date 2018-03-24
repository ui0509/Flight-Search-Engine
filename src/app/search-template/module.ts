import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { SearchTemplateComponent } from './component';
import { routes } from './route';
import { SearchCriteriaModule } from './search-criteria/module';
import { SearchResultModule } from './search-result/module';
import { SearchCityModule} from './search-city/module';

@NgModule({
    declarations: [SearchTemplateComponent],
    imports: [
        CommonModule,
        SearchCriteriaModule,
        SearchResultModule,
        SearchCityModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})

export class SearchTemplateModule {}