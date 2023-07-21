import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { EtagepComponent } from './etagep/etagep.component';
import { EtagesComponent } from './etages/etages.component';
import { ReservationpComponent } from './reservationp/reservationp.component';
import { AnnulerComponent } from './annuler/annuler.component';
import { EtageppComponent } from './etagepp/etagepp.component';
import { UpdatepComponent } from './updatep/updatep.component';
import { SortieComponent } from './sortie/sortie.component';
import { EtagessComponent } from './etagess/etagess.component';
import { EtagetComponent } from './etaget/etaget.component';
import { EtagettComponent } from './etagett/etagett.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AnnulersComponent } from './annulers/annulers.component';
import { UpdatesComponent } from './updates/updates.component';
import { UpdatetComponent } from './updatet/updatet.component';
import { AnnulertComponent } from './annulert/annulert.component';
import { ReservationtComponent } from './reservationt/reservationt.component';
import { SortiesComponent } from './sorties/sorties.component';
import { SortietComponent } from './sortiet/sortiet.component';
import { RegisterComponent } from './register/register.component';
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
import { DechargepComponent } from './dechargep/dechargep.component';
import { DechargesComponent } from './decharges/decharges.component';
import { DechargetComponent } from './decharget/decharget.component';
import { RefreshTokenInterceptorInterceptor } from './refresh-token-interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EtagepComponent,
    EtagesComponent,
    ReservationpComponent,
    AnnulerComponent,
    EtageppComponent,
    UpdatepComponent,
    SortieComponent,
    EtagessComponent,
    EtagetComponent,
    EtagettComponent,
    ReservationsComponent,
    AnnulersComponent,
    UpdatesComponent,
    UpdatetComponent,
    AnnulertComponent,
    ReservationtComponent,
    SortiesComponent,
    SortietComponent,
    RegisterComponent,
    ListuserComponent,
    UtilisateurComponent,
    EtagepuComponent,
    EtageppuComponent,
    EtagesuComponent,
    EtagessuComponent,
    EtagetuComponent,
    EtagettuComponent,
    ListuseruComponent,
    HelppComponent,
    DetailComponent,
    DechargepComponent,
    DechargesComponent,
    DechargetComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   FormsModule,
   HttpClientModule,
   MatCardModule,
   LayoutModule,
   MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatGridListModule,
   MatMenuModule,
   MatDialogModule,
   
   
  
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
