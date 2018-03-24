import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'search',
        loadChildren: 'app/search-template/module#SearchTemplateModule'
        
    },
    { path: '', redirectTo: 'search', pathMatch: 'full' }
]