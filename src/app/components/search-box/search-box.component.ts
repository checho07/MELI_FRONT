import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Listitems } from 'src/app/interfaces/listitems';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  queryText = ''; // variable que contiene el valor del input de busqueda

  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
  }

 
/**
 * Funcion que consume el metodo 'queryItems' que realiza llamado a la API para consulta de items
 */
  queryItems(){
    this.api.queryItems(this.queryText).subscribe((res:Listitems) => {
      this.router.navigateByUrl('/items') // Cuando se recibe respuesta de la API se cambia a la vista 'items'
       this.api.setSubject(res); // se ejecuta el BehaviorSubject.next() para que actualice su data con la que llega de la API
    })
  }

}
