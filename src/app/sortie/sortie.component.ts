import { Component,Inject, OnInit } from '@angular/core';
import { Chambre } from '../model/chambre';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EtageppService } from '../service/etagepp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.scss']
})
export class SortieComponent implements OnInit {
  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  objetFormControl: FormControl | undefined;
  //selectedObject: any;
  inputdata: any;
  //localDate: any | undefined;
  constructor(@Inject(MAT_DIALOG_DATA)public data:number,private etageppService:EtageppService, private route:ActivatedRoute, private router:Router, private ref:MatDialogRef<SortieComponent>/*,private datePipe: DatePipe*/) { }

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
      location.reload();
    }
    , error => console.log(error));
  }
  
     
  goToContinentList(){
    this.router.navigate(['/admin/etage11']);
  }
  getChambre(){
  this.id=this.inputdata.id;
    this.etageppService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}
}
