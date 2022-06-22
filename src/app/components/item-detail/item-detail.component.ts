import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {


  private id = '' as any; // parametro que se obtiende de la URL

  itemData = <Item>{}; //Inicializacion de objeto tipado vacio.

  _currency = '' as string;

  constructor(private route: ActivatedRoute, private api: ApiService) {

    this.id = this.route.snapshot.paramMap.get('id')?.toString();   


   }

  async ngOnInit(): Promise<void> {
    /**
     * Se consume el metodo 'getItemById' para llamar la API y obtener la data de un ITEM por su ID
     */
   await this.api.getItemById(this.id).subscribe((data:Item) => {
      this.itemData = data;
      this._currency = data.item?.price.currency;
    })
  }

}
