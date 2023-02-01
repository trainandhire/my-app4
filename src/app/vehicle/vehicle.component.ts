import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public term:string = "";
  public column:string = "";
  public order:string="";
  public limit:number=10;
  public vehicles:Vehicle[] = [];

  constructor(private _vehicleService: VehicleService,
     private router: Router) {  
    this._vehicleService.getVehicles().subscribe(
      (data:Vehicle[])=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error.")
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error.")
      }
    )
  }

  page(page:number){
    this._vehicleService.getPagedVehicles(this.limit,page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error.")
      }
    )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  view(id:any){
    this.router.navigateByUrl("/dashboard/vehicle-details/"+id);
  }

  edit(id:any){
    this.router.navigateByUrl("/dashboard/edit-vehicle/"+id);
  }





}
