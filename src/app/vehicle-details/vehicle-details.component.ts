import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  constructor(private _activatedRoute: ActivatedRoute) {
    
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // get specific data from api
      }
    )

  }

}
