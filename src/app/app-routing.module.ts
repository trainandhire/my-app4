import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { PipesComponent } from './pipes/pipes.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent,children:[
    {path:'home', component: HomeComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'cars', component: CarsComponent},
    {path:'pipes', component: PipesComponent},
    {path:'phones', component: PhonesComponent},
    {path:'vehicle', component: VehicleComponent},
    {path:'create-vehicle', component: CreateVehicleComponent}
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
