import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  public phones:any = [
    {brand:'samsung',model:'a4',price:20000},
    {brand:'iphone',model:'13',price:70000}
  ]


}
