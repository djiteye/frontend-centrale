import { Component, Inject, OnInit } from '@angular/core';
import { Chambre } from '../model/chambre';

import { ActivatedRoute, Router } from '@angular/router';
import { EtagepService } from '../service/etagep.service';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservationp',
  templateUrl: './reservationp.component.html',
  styleUrls: ['./reservationp.component.scss']
})
export class ReservationpComponent implements OnInit {
  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  objetFormControl: FormControl | undefined;
  //selectedObject: any;
  inputdata: any;
  //localDate: any | undefined;
  constructor(@Inject(MAT_DIALOG_DATA)public data:number,private etagepService:EtagepService, private route:ActivatedRoute, private router:Router, private ref:MatDialogRef<ReservationpComponent>/*,private datePipe: DatePipe*/) { }

  ngOnInit(): void { 
// this.getChambre();
 this.inputdata=this.data;
 //this.localDate = this.getLocalDate();
  }
  /*getLocalDate() {
    const currentDate = new Date();
    this.datePipe.transform(currentDate, 'short', undefined, 'tn-TN');
    //return formattedDate;
  }*/
  onSubmit(){
   
    this.reservationChambreData.id=this.inputdata.id;
    this.reservationChambreData.appartement=this.inputdata.appartement;
   // this.reservationChambreData.date_de_reserv=this.localDate;
    this.reservationChambreData.place=this.inputdata.place;
    this.reservationChambreData.name=this.inputdata.name;
    this.reservationChambreData.genre=this.inputdata.genre;
    this.etagepService.updateChambre(this.inputdata.id, this.reservationChambreData).subscribe( data =>{
      
      this.ref.close();
      this.goToContinentList();
      location.reload();
      
    }
    , error => console.log(error));
  }
  
     
  goToContinentList(){
    this.router.navigate(['/admin/etage1']);
  }
  getChambre(){
  this.id=this.inputdata.id;
    this.etagepService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}

}
