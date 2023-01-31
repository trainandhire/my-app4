import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { ContactOfficeComponent } from './contact-office/contact-office.component';

const routes: Routes = [
  {path:'contact-office', component:ContactOfficeComponent},
  {path:'contact-admin',component:ContactAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
