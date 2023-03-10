import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CarsComponent } from './cars/cars.component';
import { PipesComponent } from './pipes/pipes.component';
import { PhonesComponent } from './phones/phones.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsModule } from './about-us/about-us.module';
import { PricePipe } from './price.pipe';
import { ImpDirective } from './imp.directive';
import { JobsComponent } from './jobs/jobs.component';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    DirectivesComponent,
    CarsComponent,
    PipesComponent,
    PhonesComponent,
    VehicleComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    NavComponent,
    CartComponent,
    PricePipe,
    ImpDirective,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
