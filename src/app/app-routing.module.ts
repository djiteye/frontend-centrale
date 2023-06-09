import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EtagepComponent } from './etagep/etagep.component';
import { EtagesComponent } from './etages/etages.component';
import { ReservationpComponent } from './reservationp/reservationp.component';

const routes: Routes = [
  { path : '', component :  LoginComponent },
  { path : 'admin', component :  AdminComponent, canActivateChild: [],
  children:[
    {path:'etage1', component: EtagepComponent, pathMatch: 'full'},
    {path:'etage2', component: EtagesComponent, pathMatch: 'full'}
   
  ]  },
  {path:'admin/etage1/:id',component:ReservationpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
