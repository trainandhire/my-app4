import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { AuthenticationGuard } from './authentication.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhonesComponent } from './phones/phones.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard], children:[
    {path:'home', component: HomeComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'cars', component: CarsComponent},
    {path:'pipes', component: PipesComponent},
    {path:'phones', component: PhonesComponent},
    {path:'vehicle', component: VehicleComponent},
    {path:'create-vehicle', component: CreateVehicleComponent},
    {path:'vehicle-details/:id', component: VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'parent', component: ParentComponent},
    {path:'product', component: ProductComponent},
    {path:'cart', component:CartComponent},
    {path:'nav',component:NavComponent},
    {path:'about-company', component: AboutCompanyComponent},
    {
      path: 'contact-us',
      loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
    }

  ]},
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
