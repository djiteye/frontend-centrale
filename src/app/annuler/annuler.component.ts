import { Component, Inject, OnInit } from '@angular/core';
import { Chambre } from '../model/chambre';
import { EtagepService } from '../service/etagep.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-annuler',
  templateUrl: './annuler.component.html',
  styleUrls: ['./annuler.component.scss']
})
export class AnnulerComponent implements OnInit {
  id:any;
  chambre:any;
  reservationChambreData: Chambre=new Chambre(); 
  inputdata: any;
  constructor(@Inject(MAT_DIALOG_DATA)public data:number,private etagepService:EtagepService, private route:ActivatedRoute, private router:Router,private ref:MatDialogRef<AnnulerComponent>) { }

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
    this.router.navigate(['/admin/etage1']);
  }
  getChambre(){
    this.etagepService.getChambre(this.id).subscribe(data => {
      this.chambre = data;
    },error=>alert("error"));
    
}

}
