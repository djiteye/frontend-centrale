import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EtagepComponent } from './etagep/etagep.component';
import { EtagesComponent } from './etages/etages.component';
import { ReservationpComponent } from './reservationp/reservationp.component';
import { AnnulerComponent } from './annuler/annuler.component';
import { UpdatepComponent } from './updatep/updatep.component';
import { EtageppComponent } from './etagepp/etagepp.component';
import { EtagessComponent } from './etagess/etagess.component';
import { EtagetComponent } from './etaget/etaget.component';
import { EtagettComponent } from './etagett/etagett.component';
import { UpdatesComponent } from './updates/updates.component';
import { UpdatetComponent } from './updatet/updatet.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { EtagepuComponent } from './etagepu/etagepu.component';
import { EtageppuComponent } from './etageppu/etageppu.component';
import { EtagesuComponent } from './etagesu/etagesu.component';
import { EtagessuComponent } from './etagessu/etagessu.component';
import { EtagetuComponent } from './etagetu/etagetu.component';
import { EtagettuComponent } from './etagettu/etagettu.component';
import { ListuseruComponent } from './listuseru/listuseru.component';
import { HelppComponent } from './helpp/helpp.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path : '', component :  LoginComponent },
  { path : 'login', component :  LoginComponent },
  {path:'admin',redirectTo:'admin/etage1',pathMatch:'full'},
  { path : 'admin', component :  AdminComponent,canActivate:[AuthGuard], canActivateChild: [],
  children:[
    {path:'etage1', component: EtagepComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etage11', component: EtageppComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etage2', component: EtagesComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etage22', component: EtagessComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etage3', component: EtagetComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etage33', component: EtagettComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'users', component: ListuserComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'help', component: HelppComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'detail', component: DetailComponent,canActivate:[AuthGuard], pathMatch: 'full'}
    
   
  ]  },
  {path:'admin/etage1/:id',component:UpdatepComponent,canActivate:[AuthGuard] },
  {path:'admin/etage2/:id',component:UpdatesComponent ,canActivate:[AuthGuard]},
  {path:'admin/etage3/:id',component:UpdatetComponent, canActivate:[AuthGuard] },
  {path:'utilisateur',redirectTo:'utilisateur/etageu1',pathMatch:'full'},
  {path:'utilisateur',component :  UtilisateurComponent,canActivate:[AuthGuard],canActivateChild: [],
  children:[
    {path:'etageu1', component: EtagepuComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etageu11', component: EtageppuComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etageu2', component: EtagesuComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etageu22', component: EtagessuComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etageu3', component: EtagetuComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'etageu33', component: EtagettuComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'usersu', component: ListuseruComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'help', component: HelppComponent,canActivate:[AuthGuard], pathMatch: 'full'},
    {path:'detail', component: DetailComponent,canActivate:[AuthGuard], pathMatch: 'full'}
]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
