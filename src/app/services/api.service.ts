import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { Listitems } from '../interfaces/listitems';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   obj = {} as Listitems;

   /**
    * BehaviorSubject que almacenara los datos que vengan de la API search
    */
  private subject = new BehaviorSubject<Listitems>(this.obj); 


  /**
   * Observable del BehaviorSubject para que pueda ser esuchado en los componentes
   */
  private _subject = this.subject.asObservable();

  constructor(private http: HttpClient) { }


/**
 * Funcion que consulta la API para realizar busqueda de items
 * @param _query string que contiene el texto a buscar
 * @returns retorna el observable de la peticion a la API para poder ser esuchado en el componente
 */
 queryItems(_query:string){

  let queryParams = new HttpParams();

    queryParams = queryParams.append('q',_query);

  return this.http.get<Listitems>(' https://apimelitest.herokuapp.com/api/items',{params:queryParams})
 }

 /**
  * Funcion que consulta la API para obtener la informacion de un item por su ID
  * @param _id  string con el ID del item a buscar
  * @returns retorna el observable de la peticion a la API para poder ser esuchado en el componente
  */
 getItemById(_id:string){
  return this.http.get<Item>(` https://apimelitest.herokuapp.com/api/items/${_id}`,);
 }


 /**
  * Funcion GETTER del BehaviorSubject que contiene la lista del resultado de la busqueda
  * @returns 
  */
 getSubject():Observable<Listitems>{
  return this._subject;
}

/**
 * Función que permie actualizar el BehaviorSubject que contiene la lista del resultado de la busqueda 
 * @param value resultado de la consulta a la API /search 
 * @returns retorna una atualizacion de la data del  BehaviorSubject
 */
setSubject(value:Listitems){
  return this.subject.next(value);
}


}
