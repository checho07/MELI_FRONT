import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ITEM_DETAL, SEARCH, SEARCH_RESULT } from './constants/routes';

const routes: Routes = [
  {path:'', redirectTo:SEARCH, pathMatch:'full'},
  {path:SEARCH, component: SearchBoxComponent},
  {path: SEARCH_RESULT, component: SearchResultComponent},
  {path: ITEM_DETAL, component:ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
