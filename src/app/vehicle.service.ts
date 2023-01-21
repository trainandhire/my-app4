import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1");
  }

  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get("URL?filter="+term);
  }

  getSortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get(
      "URL?sortBy="+column+"&order="+order);
  }

  getPagedVehicles(limit:number,page:number):Observable<any>{
    return this._httpClient.get(
      "URL?limit="+limit+"&page="+page);
  }

  deleteVehicle(id:string):Observable<any>{
    return this._httpClient.delete("URL/"+id);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }


}
