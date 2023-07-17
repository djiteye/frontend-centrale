import { Component, Inject, OnInit } from '@angular/core';
import { EtagesService } from '../service/etages.service';
import { Chambre } from '../model/chambre';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annulers',
  templateUrl: './annulers.component.html',
  styleUrls: ['./annulers.component.scss']
})
export class AnnulersComponent implements OnInit {

  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  inputdata: any;
  constructor(@Inject(MAT_DIALOG_DATA)public data:number,private etagepService:EtagesService, private route:ActivatedRoute, private router:Router,private ref:MatDialogRef<AnnulersComponent>) { }

  ngOnInit(): void { 
 //this.getChambre();
 this.inputdata=this.data;
  }
  onSubmit(){
    this.reservationChambreData.id=this.inputdata.id;
    this.reservationChambreData.appartement=this.inputdata.appartement;
    this.reservationChambreData.place=this.inputdata.place;
    this.reservationChambreData.name=this.inputdata.name;
    this.reservationChambreData.genre=this.inputdata.genre;
    this.reservationChambreData.valider=false;
    this.etagepService.updateChambre(this.inputdata.id, this.reservationChambreData).subscribe( data =>{
      this.ref.close();
      this.goToContinentList();
      location.reload();
    }
    , error => console.log(error));
  }
  
     
  goToContinentList(){
    this.router.navigate(['/admin/etage2']);
  }
  getChambre(){
    this.etagepService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}
}
