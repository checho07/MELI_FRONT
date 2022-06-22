import { Component, OnInit } from '@angular/core';
import { Listitems } from 'src/app/interfaces/listitems';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {


 resultQuery = {} as Listitems;
 items:any;

  constructor(private api: ApiService) {   

   }

  ngOnInit(): void {
    /**
     * Se consume el metodo GETTER para subscribirse a los cambios del BehaviorSubject y actualizar los datos del DOM
     */
    this.api.getSubject().subscribe((res:Listitems) => {
      this.resultQuery = res;
      this.items = this.resultQuery.items;
    })
  }

}
