import { Component, Inject, OnInit } from '@angular/core';
import { EtagessService } from '../service/etagess.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Chambre } from '../model/chambre';
import { ActivatedRoute, Router } from '@angular/router';
import { EtagettService } from '../service/etagett.service';

@Component({
  selector: 'app-sortiet',
  templateUrl: './sortiet.component.html',
  styleUrls: ['./sortiet.component.scss']
})
export class SortietComponent implements OnInit {

  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  objetFormControl: FormControl | undefined;
  //selectedObject: any;
  inputdata: any;
  //localDate: any | undefined;
  constructor(@Inject(MAT_DIALOG_DATA)public data:number,private etageppService:EtagettService, private route:ActivatedRoute, private router:Router, private ref:MatDialogRef<SortietComponent>/*,private datePipe: DatePipe*/) { }

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
    this.reservationChambreData.date_de_reserv=this.inputdata.date_reserv;
    this.reservationChambreData.place=this.inputdata.place;
    this.reservationChambreData.name=this.inputdata.name;
    this.reservationChambreData.genre=this.inputdata.genre;
    this.reservationChambreData.nom=this.inputdata.nom;
    this.reservationChambreData.prenom=this.inputdata.prenom;
    this.reservationChambreData.nationalite=this.inputdata.nationalite;
    this.reservationChambreData.passeport=this.inputdata.passeport;
    this.reservationChambreData.date_arrive=this.inputdata.date_arrive;
    this.reservationChambreData.date_entre=this.inputdata.date_entre;
    this.reservationChambreData.valider=this.inputdata.valider;
    this.etageppService.updateChambre(this.inputdata.id, this.reservationChambreData).subscribe( data =>{
      
      this.ref.close();
      this.goToContinentList();
      
    }
    , error => console.log(error));
  }
  
     
  goToContinentList(){
    this.router.navigate(['/admin/etage33']);
  }
  getChambre(){
  this.id=this.inputdata.id;
    this.etageppService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}

}
