import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {

  public phones:any = [];

  constructor(private _phonesService:PhonesService){
      this.phones = _phonesService.phones;
  }

}
