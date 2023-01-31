import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl()
    }
  )

  public isEdit:boolean = false;
  public id:any = "";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){

    this._activatedRoute.params.subscribe(
      (data:any)=>{

        if(data.id){

          this.isEdit = true;
          this.id = data.id;

          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            }
          )

        }

      }
    )

  }

  submit(){

    if(this.isEdit){
      this._vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe(
        (data:any)=>{
          alert("udpated successfully");
        },
        (err:any)=>{
          alert("internal server eror");
        }
      )
    }
    else{
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("created successfully");
        },
        (err:any)=>{
          alert("internal server eror");
        }
      )
    }
  }


}
