import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactOfficeComponent } from './contact-office/contact-office.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';


@NgModule({
  declarations: [
    ContactOfficeComponent,
    ContactAdminComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
